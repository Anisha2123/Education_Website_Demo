
// import "../App.css";

// import teamImage from "../assets/image.png"; // Make sure to add an image in assets folder

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1 className="about-title">About Us</h1>

//       <section className="about-section">
//         <h2 className="about-subtitle">Vision</h2>
//         <p className="about-text">
//           To become a leading center in transforming the youth through skill-based education and training.
//         </p>
//       </section>

//       <section className="about-section">
//         <h2 className="about-subtitle">Mission</h2>
//         <p className="about-text">
//           To provide relevant practical skills, build confidence, and create employment-ready individuals through industry-recognized training programs.
//         </p>
//       </section>

//       <section className="about-section">
//         <h2 className="about-subtitle">Our Values</h2>
//         <ul className="about-list">
//           <li>Empowerment</li>
//           <li>Integrity</li>
//           <li>Inclusivity</li>
//           <li>Innovation</li>
//         </ul>
//       </section>

//       {/* Optional Image/Team Showcase */}
//       <div className="about-section team-section">
//         <img src={teamImage} alt="Our Team" className="team-image" />
//         <p className="about-text mt-3 text-center italic">A community of dedicated trainers & learners growing together.</p>
//       </div>

//       {/* Call to Action Section */}
//       <div className="about-cta">
//         <h3 className="about-cta-title">Ready to level up your skills?</h3>
//         <p className="about-cta-text">Join our mission to empower youth with practical knowledge and real-world training.</p>
//         <a href="/apply" className="about-cta-btn">Apply Now</a>
//       </div>
//     </div>
//   );
// };

// export default About;

import "../App.css";
import teamImage from "../assets/image.png"; // Replace with your actual image

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2 className="about-subtitle">Vision</h2>
        <p className="about-text">
          To become a leading center in transforming the youth through skill-based education and training.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Mission</h2>
        <p className="about-text">
          To provide relevant practical skills, build confidence, and create employment-ready individuals through industry-recognized training programs.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Our Values</h2>
        <ul className="about-list">
          <li>Empowerment</li>
          <li>Integrity</li>
          <li>Inclusivity</li>
          <li>Innovation</li>
        </ul>
      </section>

      <div className="about-section team-section">
        <img src={teamImage} alt="Our Team" className="team-image" />
        <p className="about-text mt-3 text-center italic">
          A community of dedicated trainers & learners growing together.
        </p>
      </div>

      {/* Call to Action Section stays the same */}
      <div className="about-cta">
        <h3 className="about-cta-title">Ready to level up your skills?</h3>
        <p className="about-cta-text">
          Join our mission to empower youth with practical knowledge and real-world training.
        </p>
        <a href="/apply" className="about-cta-btn">Apply Now</a>
      </div>
    </div>
  );
};

export default About;

  