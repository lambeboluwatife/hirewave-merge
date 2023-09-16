import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="not-found">
        <h1>Oops!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <h6>
          The page you are looking for might have been removed <br />
          had its name changed or is temporarily unavailable.
        </h6>
        <div className="button">
          <Link to="/">
            <button className="btn">GO TO HOME PAGE</button>
          </Link>

          <button
            className="btn2"
            onClick={() => {
              navigate(-1);
            }}
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
