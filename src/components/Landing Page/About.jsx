import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <h6>
          Are you a small business looking to harness the energy and innovation
          that young graduates bring? <br /> Look no further. At Hirewave, our
          mission is to connect you with the best emerging talent, helping you{" "}
          <br /> build a dynamic team that drives growth and innovation.{" "}
        </h6>
        <h6>
          With a focus on creating mutually beneficial partnerships, we empower
          both businesses and <br /> graduates to succeed. Join us in shaping
          the future of work. Explore our services and discover how we <br />{" "}
          can be your partner in unlocking potential.
        </h6>
        <div className="data">
          <div className="business">
            <h1>200+</h1>
            <h6>Registered Businesses</h6>
          </div>
          <div className="graduates">
            <h1>500+</h1>
            <h6>Fresh Graduates</h6>
          </div>
          <div className="vacancies">
            <h1>180+</h1>
            <h6>Active Vacancies</h6>
          </div>
        </div>
        <div className="about-btn">
          <Link to="#services">
            <button className="btn">Learn more</button>
          </Link>
          <Link to="/post-job">
            <button className="btn2">Post A Job</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
