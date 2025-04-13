

const express = require('express');
const Testimonial = require('../models/Testimonial');

const router = express.Router();

// GET all
router.get('/', async (req, res) => {
  const data = await Testimonial.find();
  res.json(data);
});

// CREATE
router.post('/', async (req, res) => {
  const t = new Testimonial(req.body);
  await t.save();
  res.json({ message: 'Added' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
