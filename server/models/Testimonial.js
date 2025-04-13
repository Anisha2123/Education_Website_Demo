

const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  designation: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
