
const express = require('express');
const Course = require( '../models/Course.js');

const router = express.Router();

// GET all or filtered courses
router.get('/', async (req, res) => {
  try {
    const { category, duration, mode } = req.query;

    const query = {};
    if (category) query.category = category;
    if (duration) query.duration = duration;
    if (mode) query.mode = mode;

    const courses = await Course.find(query);
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

module.exports= router;

