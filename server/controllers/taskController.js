const User = require('../models/User');
const Task = require('../models/Task');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
      createdBy: req.user.id  // ✅ get from JWT
    });
    console.log("🔥 Incoming Task Body:", req.body);
console.log("👤 Logged In User ID:", req.user?.id);

    res.status(201).json(task);
  } catch (error) {
    console.error("❌ Create task error:", error.message);      // existing
  console.error("❗ Error object:", error);                   // ✅ full object log
  res.status(500).json({ error: "Server Error" });
};
};


exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};


exports.updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: id, createdBy: req.user.id },
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Task not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Task.findOneAndDelete({ _id: id, createdBy: req.user.id });
    if (!deleted) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting task" });
  }
};

