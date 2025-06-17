import axios from 'axios';
const API_URL = import.meta.env.VITE_SITE_URL + '/api/tasks';

// const API_URL = "http://localhost:5000/api/tasks"; 
// const API_URL = "https://backend-task-manger-production.up.railway.app/api/tasks";


// ✅ Set token in Authorization header
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // console.log("📤 Setting token:", token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// ✅ Fetch all tasks
export const getTasks = async () => {
  try {
    setAuthToken(localStorage.getItem('authToken'));
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching tasks:', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Create a new task
export const createTask = async (taskData) => {
  try {
    setAuthToken(localStorage.getItem('authToken'));
    const res = await axios.post(API_URL, taskData);
    return res.data;
  } catch (err) {
    console.error("❌ Create Task Error:", err.response?.data || err.message);
    throw err;
  }
};

// ✅ Update task by ID
export const updateTask = async (taskId, taskData) => {
  try {
    setAuthToken(localStorage.getItem('authToken'));
    const response = await axios.put(`${API_URL}/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error('❌ Error updating task:', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Delete task by ID
export const deleteTask = async (taskId) => {
  try {
    setAuthToken(localStorage.getItem('authToken'));
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('❌ Error deleting task:', error.response?.data || error.message);
    throw error;
  }
};

