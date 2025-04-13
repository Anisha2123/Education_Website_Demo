

import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [mode, setMode] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;


  const sampleCourses = [
    {
      title: 'Full Stack Web Development',
      duration: '3 Months',
      mode: 'Offline',
      description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.',
    },
    {
      title: 'Communication & Soft Skills',
      duration: '1 Month',
      mode: 'Online',
      description: 'Boost your verbal & written communication, leadership, and interpersonal skills for the workplace.',
    },
    {
      title: 'Data Entry Operator',
      duration: '2 Months',
      mode: 'Offline',
      description: 'Learn fast and accurate data entry techniques with Excel, Google Sheets, and keyboard skills.',
    },
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const url = category
          ? `${backendUrl}/api/courses/filter?category=${category}`
          : `${backendUrl}/api/courses`;
        const res = await axios.get(url);
        setCourses(res.data.length > 0 ? res.data : sampleCourses);
      } catch (error) {
        setCourses(sampleCourses);
      }
    };
    fetchCourses();
  }, [category]);

  return (
    <div className="courses-container">
      <h2 className="courses-title">Courses Offered</h2>

      {/* <div className="category-select-wrapper">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">All Categories</option>
          <option value="IT">IT</option>
          <option value="Soft Skills">Soft Skills</option>
        </select>
      </div> */}

      <div className="courses-grid">
        {courses.map((course, i) => (
          <div key={i} className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Mode:</strong> {course.mode}</p>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

