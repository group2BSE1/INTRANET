// Import necessary React libraries and CSS for styling
import React from "react";
import "../styles/WelcomePage.css"; // Create a CSS file for styling
import Footer from "../components/Footer";
// import Header from "./Header";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <main>
        <div className="welc">
          <h1>Welcome to Your Intranet System</h1>
          <p>Your company's central hub for information and collaboration</p>
        </div>
        <section className="features">
          <div className="feature">
            <h2>Announcements</h2>
            <p>Stay updated with the latest company news and announcements.</p>
          </div>
          <div className="feature">
            <h2>Teams</h2>
            <p>
              Connect with your colleagues and collaborate in dedicated teams.
            </p>
          </div>
          <div className="feature">
            <h2>Documents</h2>
            <p>Access and manage important documents and files.</p>
          </div>
        </section>
        <div className="images">
          <div className="image-box">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="image-box">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="image-box">
            <img src={image3} alt="Image 3" />
          </div>
        </div>
      </main>
      <Link to="/login">
        <button className="get-started-button">Let's Get Started</button>
      </Link>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;
