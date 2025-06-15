import { createContext, useContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../API/taskService';
// import taskService from '../API/taskService';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //  Add a new task
 const addTask = async (taskData) => {
  try {
    const newTask = await createTask(taskData); 
    setTasks(prev => [...prev, newTask]);
  } catch (err) {
    console.error("Add Task Error:", err.response?.data || err.message);
    setError(err.message);
  }
};

  // Update an existing task
  const editTask = async (taskId, updatedFields) => {
    try {
      const updatedTask = await updateTask(taskId, updatedFields);
      setTasks(prev =>
        prev.map(task => (task._id === taskId ? updatedTask : task))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  //  Delete a task
  const removeTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(prev => prev.filter(task => task._id !== taskId));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      loading,
      error,
      addTask,
      editTask,
      removeTask,
      fetchTasks
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
