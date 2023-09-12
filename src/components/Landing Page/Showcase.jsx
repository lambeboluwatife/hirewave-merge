import { Link } from "react-router-dom";

const Showcase = ({ showcase }) => {
  return (
    <div className="showcase">
      <div className="container">
        <img src={showcase.image} alt="" className="showcase-img" />

        {showcase.svg && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="203"
            height="210"
            viewBox="0 0 203 210"
            fill="none"
          >
            <path
              d="M198.558 205.042L6.47273 139.012L159.699 5.67596L198.558 205.042Z"
              stroke="#96B300"
              stroke-width="6"
            />
          </svg>
        )}
        <div className="showcase-content">
          <h1>{showcase.title}</h1>
          <h6>{showcase.text}</h6>
          <Link to={showcase.link}>
            <button className="btn btn-explore">{showcase.button}</button>
          </Link>
          <div className="candidates">
            <img className="ellipse-1" src="/Ellipse 207.svg" alt="" />
            <img className="ellipse-2" src="/Ellipse 208.svg" alt="" />
            <img className="ellipse-3" src="/Ellipse 209.svg" alt="" />
            <img className="ellipse-4" src="/Ellipse 210.svg" alt="" />
            <img className="ellipse-5" src="/Ellipse 212.svg" alt="" />
            <img className="ellipse-6" src="/Ellipse 213.svg" alt="" />
            <h5>20+</h5>
            <h6>Candidates</h6>
          </div>
        </div>
        <div className="container">
          <center>
            <img src={showcase.image} alt="" className="mobile-img" />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
