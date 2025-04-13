

import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Apply = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '' });
  const [status, setStatus] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses').then((res) => setCourses(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/apply', form);
      setStatus('✅ Application submitted successfully!');
      setForm({ name: '', email: '', phone: '', course: '' });
    } catch {
      setStatus('❌ Failed to submit application.');
    }
  };

  return (
    <div className="apply-container">
      <h2 className="apply-title">Apply for a Course</h2>
      <form onSubmit={handleSubmit} className="apply-form">
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="apply-input"
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="apply-input"
          required
        />
        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="apply-input"
          required
        />
        <select
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="apply-select"
          required
        >
          <option value="">Select Course</option>
          {courses.map((c, i) => (
            <option key={i} value={c.title}>{c.title}</option>
          ))}
        </select>

        <button type="submit" className="apply-btn">Submit Application</button>
        {status && <p className="apply-status">{status}</p>}
      </form>
    </div>
  );
};

export default Apply;

