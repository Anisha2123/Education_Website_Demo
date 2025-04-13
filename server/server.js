
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const applicationRoutes = require('./routes/applicationRoutes');
// const TestimonialRoutes= require('./routes/testimonialRoutes');
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB error:", err));

// Routes
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
// app.use('/api/apply', require('./routes/applyRoutes'));
app.use('/api/apply', applicationRoutes);



  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));