import { Link, useLocation } from "react-router-dom";
import homeImage from "/home_image.webp";

const Hero = ({ showcase }) => {
  const location = useLocation();

  return (
    <div className={`showcase ${location.pathname === "/" ? "lightblue" : ""}`}>
      <div className="container">
        <img
          src={showcase.image}
          alt="showcase image"
          className="showcase-img"
        />

        <div className="showcase-content">
          <h1>{showcase.title}</h1>
          <h6>{showcase.text}</h6>
          <div className="showcase-button">
            <Link to={showcase.link}>
              <button className="btn">{showcase.button}</button>
            </Link>
          </div>
        </div>
        <div className="container">
          <center>
            <img
              src={showcase.image}
              alt="showcase image"
              className="mobile-img"
            />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Hero;
