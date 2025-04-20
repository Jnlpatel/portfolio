import axios from 'axios';

const API_URL = 'https://portfolio-api-ohzs.onrender.com/api'; // Replace with your actual API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Enhanced with error handling and logging
export const apiService = {
  async getData(endpoint) {
    try {
      console.log(`Fetching data from ${endpoint}`);
      const response = await api.get(endpoint);
      console.log('Received data:', response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  },

  getSkills() {
    console.log('Fetching skills...', this.getData('/skills'));
    return this.getData('/skills');
  },

  getProjects() {
    return this.getData('/projects');
  },

  getExperiences() {
    return this.getData('/experiences');
  },

  getEducation() {
    return this.getData('/educations');
  },

  getMyInfo() {
    return this.getData('/my-info');
  },
};