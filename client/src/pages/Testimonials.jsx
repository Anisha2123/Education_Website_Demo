

import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // External CSS file

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', message: '', designation: '' });

  const getTestimonials = async () => {
    const res = await axios.get('http://localhost:5000/api/testimonials');
    setTestimonials(res.data);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const addTestimonial = async () => {
    await axios.post('http://localhost:5000/api/testimonials', form);
    getTestimonials();
    setForm({ name: '', message: '', designation: '' });
  };

  const deleteTestimonial = async (id) => {
    await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
    getTestimonials();
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>

      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-message">“{t.message}”</p>
            <p className="testimonial-meta">— {t.name}, {t.designation}</p>
            <button onClick={() => deleteTestimonial(t._id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

      <div className="testimonial-form">
        <h3 className="form-title">Add a Testimonial</h3>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Designation"
          value={form.designation}
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button onClick={addTestimonial}>Add</button>
      </div>
    </div>
  );
};

export default Testimonials;
