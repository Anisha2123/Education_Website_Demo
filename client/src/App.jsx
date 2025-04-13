// client/src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Navbar from './components/NavBar'
import About from './pages/About';
// Import other pages as needed
import "./App.css";
import Testimonials from './pages/Testimonials';
import Apply from './pages/Apply';

function App() {
  return (
    <div className='main'>
      <Navbar />
     <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About/>} />
    <Route path="/Testimonials" element={<Testimonials />} />
    <Route path="/Apply" element={<Apply />} />
  </Routes>
    </div>
  
   
  )
}

export default App

