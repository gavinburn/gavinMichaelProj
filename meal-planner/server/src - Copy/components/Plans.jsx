// --- Plans.jsx (with inline success/error banners) ---
import React, { useEffect, useState } from 'react';
import { Plus, X, Calendar, Utensils, RefreshCcw, CheckCircle, FolderCheck, Archive } from 'lucide-react';
import { apiService } from '../api_client';

function getUserId() {
  try { return JSON.parse(localStorage.getItem('userId') || 'null'); } catch { return null; }
}

const Plans = () => {
  const userId = getUserId();
  // modal inputs
  const [showModal, setShowModal] = useState(false);
  const [planName, setPlanName] = useState('');
  const [durationDays, setDurationDays] = useState('');
  const [mealsPerDay, setMealsPerDay] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // generation state
  const [plan, setPlan] = useState(null);              // freshly generated (not yet saved)
  const [loadingPlan, setLoadingPlan] = useState(false);

  // persisted plans
  const [activePlans, setActivePlans] = useState([]);  // array of saved ACTIVE plans
  const [loadingList, setLoadingList] = useState(true);

  // inline banner notice
  const [notice, setNotice] = useState(null); // { kind: 'success'|'error', msg: string }

  // load existing ACTIVE plans
  useEffect(() => {
    let ignore = false;
    (async () => {
      if (!userId) { setLoadingList(false); return; }
      try {
        const list = await apiService.getUserMealPlans(userId, 'ACTIVE');
        if (!ignore) setActivePlans(Array.isArray(list) ? list : []);
      } catch (e) {
        console.error('Fetch meal plans failed:', e);
      } finally {
        if (!ignore) setLoadingList(false);
      }
    })();
    return () => { ignore = true; };
  }, [userId]);

  const validate = () => {
    const e = {};
    const d = Number(durationDays);
    const m = Number(mealsPerDay);
    if (!planName.trim()) e.planName = 'Give your plan a name';
    if (!Number.isFinite(d) || d < 1 || d > 30) e.durationDays = 'Choose 1–30 days';
    if (!Number.isFinite(m) || m < 1 || m > 6) e.mealsPerDay = 'Choose 1–6 meals/day';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const openModal = () => { setErrors({}); setShowModal(true); };
  const closeModal = () => { if (!submitting) setShowModal(false); };

  const createPlan = async () => {
    if (!validate() || !userId) return;
    setSubmitting(true);
    setLoadingPlan(true);
    try {
      const generated = await apiService.generateMealPlan({
        userId,
        durationDays: Number(durationDays),
        mealsPerDay: Number(mealsPerDay),
      });
      setPlan(generated);
      setShowModal(false);
    } catch (err) {
      console.error('Create plan failed:', err);
      setNotice({ kind: 'error', msg: 'Failed to create plan. Please try again.' });
      setTimeout(() => setNotice(null), 5000);
    } finally {
      setSubmitting(false);
      setLoadingPlan(false);
    }
  };

  const regenerate = async () => {
    if (!validate() || !userId) return;
    try {
      setLoadingPlan(true);
      const generated = await apiService.generateMealPlan({
        userId,
        durationDays: Number(durationDays),
        mealsPerDay: Number(mealsPerDay),
      });
      setPlan(generated);
    } catch (err) {
      console.error('Regenerate plan failed:', err);
      setNotice({ kind: 'error', msg: 'Failed to regenerate plan.' });
      setTimeout(() => setNotice(null), 5000);
    } finally {
      setLoadingPlan(false);
    }
  };

  const accept = async () => {
    if (!userId || !plan) return;
    try {
      const { savedPlan } = await apiService.acceptMealPlan({ userId, name: planName.trim(), plan });
      // add saved plan to active list at top
      setActivePlans(prev => [savedPlan, ...prev]);
      setPlan(null); // clear generated plan view (now persisted)
      setPlanName(''); setDurationDays(''); setMealsPerDay('');

      setNotice({ kind: 'success', msg: 'Meal plan saved and pantry updated.' });
      setTimeout(() => setNotice(null), 4000);
    } catch (err) {
      console.error('Accept plan failed:', err);
      setNotice({ kind: 'error', msg: 'Failed to save meal plan. Please try again.' });
      setTimeout(() => setNotice(null), 5000);
    }
  };

  const markDone = async (planId) => {
    try {
      await apiService.deleteMealPlan(planId);
      setActivePlans(prev => prev.filter(p => p.id !== planId));
      setNotice({ kind: 'success', msg: 'Meal plan removed.' });
      setTimeout(() => setNotice(null), 3000);
    } catch (e) {
      console.error('Delete meal plan failed:', e);
      setNotice({ kind: 'error', msg: 'Failed to remove meal plan.' });
      setTimeout(() => setNotice(null), 5000);
    }
  };

  // render helper for the JSON plan (generated or saved)
  const renderPlan = (p) => {
    const json = p?.planJson || p; // saved object uses planJson
    if (!json?.days?.length) return null;
    return (
      <div className="space-y-4">
        {json.days.map((d) => (
          <div key={d.day} className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-800">Day {d.day}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {d.meals.map((m, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Utensils className="w-4 h-4 text-gray-600" />
                    <div className="font-medium text-gray-800">{m.title}</div>
                  </div>
                  {typeof m.calories === 'number' && (
                    <div className="text-sm text-gray-600 mb-2">~{Math.round(m.calories)} kcal</div>
                  )}
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">Uses:</span>{' '}
                    {m.uses.map(u => `${u.name} (${u.quantity} ${u.unit})`).join(', ')}
                  </div>
                  {m.instructions && (
                    <div className="text-sm text-gray-600 mt-2 whitespace-pre-line">{m.instructions}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Meal Plans</h2>
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Plan
          </button>
        </div>

        {/* Inline notice banner */}
        {notice && (
          <div
            role="status"
            aria-live="polite"
            className={`mb-4 rounded-xl border p-4 text-sm font-medium flex items-start gap-3 ${
              notice.kind === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            <div
              className={`mt-0.5 w-2 h-2 rounded-full ${
                notice.kind === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            />
            <div className="flex-1">{notice.msg}</div>
            <button
              onClick={() => setNotice(null)}
              className="shrink-0 px-2 py-1 rounded-md hover:bg-white/50 transition"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        {/* Generated (unsaved) plan viewer */}
        {loadingPlan ? (
          <div className="text-center py-12 text-gray-500">Generating…</div>
        ) : plan ? (
          <div className="space-y-4">
            <div className="mb-2 text-sm text-gray-600">
              Preview of <span className="font-medium">"{planName || 'Unnamed plan'}"</span> (not saved yet)
            </div>
            {renderPlan(plan)}
            <div className="flex gap-3 pt-2">
              <button
                onClick={accept}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Accept & Save
              </button>
              <button
                onClick={regenerate}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-white inline-flex items-center gap-2"
              >
                <RefreshCcw className="w-4 h-4" />
                Regenerate
              </button>
            </div>
          </div>
        ) : null}

        {/* Active plans list */}
        {(!plan && loadingList) ? (
          <div className="text-center py-12 text-gray-500">Loading your plans…</div>
        ) : (!plan && activePlans.length === 0) ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Utensils className="w-6 h-6 text-blue-700" />
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-1">No saved meal plans yet</p>
            <p className="text-gray-600 mb-6">Click <span className="font-medium">Create Plan</span> to get started.</p>
          </div>
        ) : (!plan && activePlans.length > 0) ? (
          <div className="grid grid-cols-1 gap-4 mt-4">
            {activePlans.map(p => (
              <div key={p.id} className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderCheck className="w-5 h-5 text-emerald-700" />
                    <div className="font-semibold text-gray-800">{p.name}</div>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">ACTIVE</span>
                  </div>
                  <button
                    onClick={() => markDone(p.id)}
                    className="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-white inline-flex items-center gap-2"
                  >
                    <Archive className="w-4 h-4" />
                    Mark Done
                  </button>
                </div>
                {renderPlan(p)}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Create Plan Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={closeModal} />
          <div className="absolute inset-x-0 top-20 mx-auto max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Create Meal Plan</h3>
                <button onClick={closeModal} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Plan name</label>
                  <input
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    placeholder="e.g., Cutting Week 1"
                    className={`mt-1 w-full px-3 py-2 rounded-lg border-2 focus:outline-none ${
                      errors.planName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.planName && <p className="mt-1 text-sm text-red-600">{errors.planName}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Duration (days)</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={durationDays}
                    onChange={(e) => setDurationDays(e.target.value)}
                    placeholder="e.g., 7"
                    className={`mt-1 w-full px-3 py-2 rounded-lg border-2 focus:outline-none ${
                      errors.durationDays ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.durationDays && <p className="mt-1 text-sm text-red-600">{errors.durationDays}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Meals per day</label>
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={mealsPerDay}
                    onChange={(e) => setMealsPerDay(e.target.value)}
                    placeholder="e.g., 3"
                    className={`mt-1 w-full px-3 py-2 rounded-lg border-2 focus:outline-none ${
                      errors.mealsPerDay ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.mealsPerDay && <p className="mt-1 text-sm text-red-600">{errors.mealsPerDay}</p>}
                </div>

                <button
                  onClick={createPlan}
                  disabled={submitting}
                  className={`mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 ${
                    submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? 'Creating…' : 'Create Plan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Plans;
