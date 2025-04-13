

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  duration: String, // Short, Medium, Long
  mode: String,     // Online, Offline, Hybrid
  level: String     // Beginner, Intermediate, Advanced
});

module.exports = mongoose.model('Course', CourseSchema);
