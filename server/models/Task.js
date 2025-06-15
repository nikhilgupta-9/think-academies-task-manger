const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title can not exceed 100 charater']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description is not more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed']
  },
  priority: {
    type: String,
    enum: [ 'low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: {
    type: Date
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }

}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


// index for better query preformance 
taskSchema.index({ createdBy: 1, status: 1});
taskSchema.index({ dueDate: 1 });

// Middleware to update updatedAt field
taskSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Task', taskSchema);