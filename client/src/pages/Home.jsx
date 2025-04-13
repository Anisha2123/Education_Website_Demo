

import { Link } from 'react-router-dom';
// import h from "./h.jpg";
import "../App.css";
import  head  from '../assets/image.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="left-section animate-slide-in-left">
          <h1 className="home-heading">
            Empowering <span className="highlight">Youth</span> with Skills
          </h1>
          <p className="home-description">
            Pratibha Skill Development Center provides hands-on training & soft skills to boost employability and self-confidence.
          </p>
          <div className="home-buttons">
            <Link to="/courses">
              <button className="home-button join-button">Join Us</button>
            </Link>
            <Link to="/contact">
              <button className="home-button train-button">Get Trained</button>
            </Link>
          </div>
        </div>

        <div className="right-section animate-fade-in">
          <img
            src={head } // replace with your image
            alt="Skill Training"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;




