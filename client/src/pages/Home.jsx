

// import { Link } from 'react-router-dom';
// // import h from "./h.jpg";
// import "../App.css";
// import  head  from '../assets/image.png';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <div className="left-section animate-slide-in-left">
//           <h1 className="home-heading">
//             Empowering <span className="highlight">Youth</span> with Skills
//           </h1>
//           <p className="home-description">
//             Pratibha Skill Development Center provides hands-on training & soft skills to boost employability and self-confidence.
//           </p>
//           <div className="home-buttons">
//             <Link to="/courses">
//               <button className="home-button join-button">Join Us</button>
//             </Link>
//             <Link to="/contact">
//               <button className="home-button train-button">Get Trained</button>
//             </Link>
//           </div>
//         </div>

//         <div className="right-section animate-fade-in">
//           <img
//             src={head } // replace with your image
//             alt="Skill Training"
//             className="hero-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Link } from 'react-router-dom';
import '../App.css';
import head from '../assets/image.png';

const Home = () => {
  return (
    <div className="home-landing">
      <div className="home-card">
        <div className="home-left">
          <h1 className="title">
            <span className="highlight">Skill Up</span> for a Brighter Tomorrow
          </h1>
          <p className="subtitle">
            Join Pratibha Skill Development Center to unlock job-ready skills, confidence, and growth.
          </p>

          <div className="features">
            <span>🚀 Hands-on Training</span>
            <span>💼 Career Guidance</span>
            <span>🎤 Soft Skills & Confidence</span>
            <span>🌱 Beginner Friendly</span>
          </div>

          <div className="cta-buttons">
            <Link to="/courses">
              <button className="btn btn-primary">Explore Courses</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-secondary">Contact Us</button>
            </Link>
          </div>
        </div>

        <div className="home-right">
          <img src={head} alt="Empower Youth" className="landing-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;





