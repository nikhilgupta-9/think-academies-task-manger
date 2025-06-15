const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

//get all user data 
app.use('/admin', require('./routes/adminRoutes'));

// Test Route
app.get('/', (req, res) => {
  res.send("✅ API is working!");
});



// database connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB connected');
    app.listen(5000, ()=> console.log('server running on port 5000'));
})
.catch(err => console.log(err));





