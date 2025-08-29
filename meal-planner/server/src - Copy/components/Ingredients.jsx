import React, { useEffect, useMemo, useState } from 'react';
import { Plus, Search, X, Package, AlertCircle, Pencil, Check, Trash2 } from 'lucide-react';
import { apiService } from '../api_client';

function getUserId() {
  const raw = localStorage.getItem('userId');
  try { return raw ? JSON.parse(raw) : null; } catch { return raw; }
}

const units = ['g', 'kg', 'mL', 'L'];
const initialForm = { name: '', quantity: '', unit: 'g' };

export default function Ingredients() {
  const userId = getUserId();

  // list + search
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  // add modal
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // edit (inline)
  const [editingId, setEditingId] = useState(null);
  const [editQty, setEditQty] = useState('');
  const [editUnit, setEditUnit] = useState('g');
  const [savingId, setSavingId] = useState(null);

  // delete confirm
  const [confirmId, setConfirmId] = useState(null);
  const [confirmName, setConfirmName] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        if (!userId) return;
        const data = await apiService.getUserIngredients(userId);
        if (!ignore) setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error('Fetch ingredients failed:', e);
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [userId]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(i => i.name.toLowerCase().includes(q));
  }, [items, query]);

  // ----- Add flow -----
  const onChangeAdd = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateAdd = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    const qty = Number(form.quantity);
    if (!qty || qty <= 0) e.quantity = 'Enter a positive number';
    if (!units.includes(form.unit)) e.unit = 'Pick a unit';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const resetAdd = () => {
    setShowAdd(false);
    setForm(initialForm);
    setErrors({});
    setSubmitting(false);
  };

  const handleCreate = async () => {
    if (!userId) { resetAdd(); return; }
    if (!validateAdd() || submitting) return;
    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        quantity: parseFloat(form.quantity),
        unit: form.unit,
      };
      const created = await apiService.createIngredient(userId, payload);
      setItems(prev => [created, ...prev]);
      resetAdd();
    } catch (err) {
      console.error(err);
      alert('Failed to add ingredient. Please try again.');
      setSubmitting(false);
    }
  };

  // ----- Edit flow (qty + unit) -----
  const startEdit = (item) => {
    setEditingId(item.id);
    setEditQty(String(item.quantity ?? ''));
    setEditUnit(item.unit ?? 'g');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditQty('');
    setEditUnit('g');
    setSavingId(null);
  };

  const saveEdit = async (id) => {
    const q = Number(editQty);
    if (!Number.isFinite(q) || q <= 0) {
      alert('Enter a positive number for quantity.');
      return;
    }
    if (!units.includes(editUnit)) {
      alert('Pick a valid unit.');
      return;
    }
    if (!userId) return;

    try {
      setSavingId(id);
      const updated = await apiService.updateIngredient(userId, id, { quantity: q, unit: editUnit });
      setItems(prev => prev.map(it => it.id === id ? updated : it));
      cancelEdit();
    } catch (err) {
      console.error('Update ingredient failed:', err);
      alert('Failed to update ingredient. Please try again.');
      setSavingId(null);
    }
  };

  // ----- Delete flow -----
  const askDelete = (item) => {
    setConfirmId(item.id);
    setConfirmName(item.name);
  };

  const cancelDelete = () => {
    setConfirmId(null);
    setConfirmName('');
    setDeletingId(null);
  };

  const confirmDelete = async () => {
    if (!confirmId || !userId) return;
    try {
      setDeletingId(confirmId);
      await apiService.deleteIngredient(userId, confirmId);
      setItems(prev => prev.filter(it => it.id !== confirmId));
      cancelDelete();
    } catch (err) {
      console.error('Delete ingredient failed:', err);
      alert('Failed to delete ingredient. Please try again.');
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Ingredients</h2>
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-72">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                type="text"
                placeholder="Search ingredients..."
                className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Ingredient
            </button>
          </div>
        </div>

        {/* Loading / Empty / List */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading…</div>
        ) : (filtered.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Package className="w-6 h-6 text-green-700" />
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-1">No ingredients yet</p>
            <p className="text-gray-600 mb-6">
              {userId
                ? 'Start by adding what you have on hand.'
                : 'Create an account or sign in to start tracking your ingredients.'}
            </p>
            {userId && (
              <button
                onClick={() => setShowAdd(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add your first ingredient
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((i) => {
              const isEditing = editingId === i.id;
              const isSaving = savingId === i.id;

              return (
                <div key={i.id} className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800">{i.name}</h3>
                        {!isEditing && (
                          <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                            {i.unit}
                          </span>
                        )}
                      </div>

                      {!isEditing ? (
                        <p className="text-gray-700 text-sm">
                          Quantity: <span className="font-medium">{i.quantity}</span>
                        </p>
                      ) : (
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={editQty}
                            onChange={(e) => setEditQty(e.target.value)}
                            className="w-32 px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-emerald-500"
                          />
                          <select
                            value={editUnit}
                            onChange={(e) => setEditUnit(e.target.value)}
                            className="px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-emerald-500"
                          >
                            {units.map(u => <option key={u} value={u}>{u}</option>)}
                          </select>
                          <button
                            onClick={() => saveEdit(i.id)}
                            disabled={isSaving}
                            className={`px-3 py-2 rounded-xl text-white font-medium bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow ${
                              isSaving ? 'opacity-70 cursor-not-allowed' : ''
                            } flex items-center gap-1`}
                          >
                            <Check className="w-4 h-4" /> Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            disabled={isSaving}
                            className="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    {!isEditing && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => startEdit(i)}
                          className="p-2 rounded-lg hover:bg-white/70 transition-colors text-gray-700"
                          title="Edit quantity & unit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => askDelete(i)}
                          className="p-2 rounded-lg hover:bg-white/70 transition-colors text-red-600"
                          title="Delete ingredient"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={resetAdd} />
          <div className="absolute inset-x-0 top-12 mx-auto max-w-lg">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Add Ingredient</h3>
                <button onClick={resetAdd} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChangeAdd}
                    placeholder="e.g., Chicken breast"
                    className={`mt-1 w-full px-3 py-2 rounded-lg border-2 focus:outline-none ${
                      errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Quantity</label>
                  <input
                    name="quantity"
                    type="number"
                    min="0"
                    value={form.quantity}
                    onChange={onChangeAdd}
                    placeholder="e.g., 500"
                    className={`mt-1 w-full px-3 py-2 rounded-lg border-2 focus:outline-none ${
                      errors.quantity ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errors.quantity}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Unit</label>
                  <select
                    name="unit"
                    value={form.unit}
                    onChange={onChangeAdd}
                    className="mt-1 w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-emerald-500"
                  >
                    {units.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button onClick={resetAdd} disabled={submitting} className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button
                  onClick={handleCreate}
                  disabled={submitting}
                  className={`px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg transition-all ${
                    submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? 'Adding…' : 'Add Ingredient'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {confirmId && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={cancelDelete} />
          <div className="absolute inset-x-0 top-24 mx-auto max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">Delete ingredient</h3>
                <button onClick={cancelDelete} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <p className="text-gray-700 mb-6">
                Are you sure you want to delete <span className="font-semibold">{confirmName}</span>? This action cannot be undone.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button onClick={cancelDelete} disabled={deletingId} className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={deletingId}
                  className={`px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-rose-600 to-red-600 hover:shadow-lg transition-all ${
                    deletingId ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {deletingId ? 'Deleting…' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}