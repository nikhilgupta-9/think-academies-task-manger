const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('./models/Task'); // ✅ adjust if needed

dotenv.config(); // ✅ load env variables

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    const dummyTask = new Task({
      title: "Finish React Project",
      description: "Complete the dashboard and authentication module",
      status: "in-progress",
      priority: "high",
      dueDate: new Date("2025-07-01"),
      createdBy: "684d954d0b39c4de99d09fc4" // ⚠️ valid user _id
    });

    return dummyTask.save();
  })
  .then(task => {
    console.log("🎯 Dummy Task Inserted:\n", task);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("❌ Error inserting task:", err);
    mongoose.disconnect();
  });
