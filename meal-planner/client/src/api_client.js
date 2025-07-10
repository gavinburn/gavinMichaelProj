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
      
      return await response.json();
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
}

// Export a single instance
export const apiService = new ApiService();