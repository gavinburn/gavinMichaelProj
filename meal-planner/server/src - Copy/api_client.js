// services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle 204 No Content or empty body safely
      if (response.status === 204) return null;
      const text = await response.text();
      if (!text) return null;

      return JSON.parse(text);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // User-related endpoints
  async createUser(userData) {
    return this.request('/user', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getUser() {
    return this.request(``);
  }

  async updateUser(userId, userData) {
    return this.request(`/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(userId) {
    return this.request(`/user/${userId}`, {
      method: 'DELETE',
    });
  }

  // Auth endpoints
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  // Fitness-related endpoints
  async getUserWorkouts(userId) {
    return this.request(`/user/${userId}/workouts`);
  }

  async createWorkout(workoutData) {
    return this.request('/workouts', {
      method: 'POST',
      body: JSON.stringify(workoutData),
    });
  }

  // --- add near other user-scoped helpers ---
  async getUserIngredients(userId) {
    return this.request(`/user/${userId}/ingredients`);
  }

  async createIngredient(userId, ingredient) {
    return this.request(`/user/${userId}/ingredients`, {
      method: 'POST',
      body: JSON.stringify(ingredient),
    });
  }

  async updateIngredient(_userId, ingredientId, partial) {
    // server route is non-scoped: /api/ingredients/:id
    return this.request(`/ingredients/${ingredientId}`, {
      method: 'PATCH',
      body: JSON.stringify(partial),
    });
  }


  async deleteIngredient(userId, ingredientId) {
    return this.request(`/user/${userId}/ingredients/${ingredientId}`, {
      method: 'DELETE',
    });
  }

  // --- api_client.js additions ---
  async generateMealPlan(payload) {
    return this.request('/meal-plans/generate', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async acceptMealPlan(payload) {
    return this.request('/meal-plans/accept', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }


  // --- meal plans ---
  async getUserMealPlans(userId, status) {
    const q = status ? `?status=${encodeURIComponent(status)}` : '';
    return this.request(`/user/${userId}/meal-plans${q}`);
  }


  async updateMealPlan(planId, partial) {
    // partial: { status?, name? 
    return this.request(`/meal-plans/${planId}`, {
      method: 'PATCH',
      body: JSON.stringify(partial),
    });
  }

  async deleteMealPlan(planId) {
    return this.request(`/meal-plans/${planId}`, { method: 'DELETE' });
  }

  // --- favourites ---
  async getUserFavorites(userId) {
    return this.request(`/user/${userId}/favorites`);
  }

  async favoriteMealPlan(userId, planId) {
    return this.request(`/meal-plans/${planId}/favorite`, {
      method: 'POST',
      body: JSON.stringify({ userId })
    });
  }

  async unfavoriteMealPlan(userId, planId) {
    // server uses query param for userId on DELETE
    return this.request(`/meal-plans/${planId}/favorite?userId=${encodeURIComponent(userId)}`, {
      method: 'DELETE'
    });
  }


}

// Export a single instance
export const apiService = new ApiService();