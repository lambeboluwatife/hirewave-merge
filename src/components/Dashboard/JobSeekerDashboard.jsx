import { useState, useEffect } from "react";
import SideNav from "../SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const JobSeekerDashboard = ({ userName }) => {
  useEffect(() => {
    document.title = "Hirewave | Job Seeker's Dashboard";
  }, []);

  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      <div className="column left">
        <SideNav />
      </div>
      <div className="column right">
        {showSideNav && <SideNav />}
        <div className="container">
          <h2 className="mobile-dashboard-header">Dashboard</h2>{" "}
          <div className="job-seeker-dashboard">
            <div className="dashboard-header">
              <div className="search-bar">
                <div>
                  <input
                    type="search"
                    placeholder="Search for jobs by title, company or skills"
                  />
                  <img src="/search.png" alt="" />
                </div>
              </div>
              <div>
                <img
                  style={{ width: "40px", marginLeft: "2rem" }}
                  src="/user.png"
                  alt="user logo"
                  className="user-dashboard-logo"
                />
                <h6>{userName}</h6>
                <img className="dropdown" src="/dropdown.png" alt="" />
                <img
                  src="/notification.png"
                  alt=""
                  className="notification-img"
                />
              </div>
            </div>
            <div className="cards">
              <div className="grid grid-3">
                <div className="card">
                  <h4>Basic Information:</h4>
                  <div className="card1-content">
                    <h5>LOCATION</h5>
                    <h5>TIMEZONE</h5>
                    <h5>AVAILABILITY</h5>
                  </div>
                  <div className="card1-content">
                    <h5>PHONE NUMBER</h5>
                    <h5>EMAIL ADDRESS</h5>
                  </div>
                  <button>Download Resume</button>
                </div>
                <div className="card card2">
                  <h4 style={{ textAlign: "center" }}>
                    Account Progress Level
                  </h4>
                  <hr />
                  <h6>
                    You have completed 10% of your account set up <br />{" "}
                    process. Keep going!{" "}
                  </h6>
                  <ul>
                    <li>
                      <svg
                        style={{ paddingRight: "1rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6.5"
                          r="6"
                          fill="#96B300"
                          fillOpacity="0.3"
                        />
                      </svg>
                      Create Account
                    </li>
                    <li>
                      {" "}
                      <svg
                        style={{ paddingRight: "1rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6.5"
                          r="6"
                          fill="#96B300"
                          fillOpacity="0.3"
                        />
                      </svg>
                      Basic Information
                    </li>
                    <li>
                      {" "}
                      <svg
                        style={{ paddingRight: "1rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6.5"
                          r="6"
                          fill="#96B300"
                          fillOpacity="0.3"
                        />
                      </svg>
                      CV and Resume
                    </li>
                    <li>
                      {" "}
                      <svg
                        style={{ paddingRight: "1rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6.5"
                          r="6"
                          fill="#96B300"
                          fillOpacity="0.3"
                        />
                      </svg>
                      Education and Skills
                    </li>
                    <li>
                      {" "}
                      <svg
                        style={{ paddingRight: "1rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="6.5"
                          r="6"
                          fill="#96B300"
                          fillOpacity="0.3"
                        />
                      </svg>
                      Work Experience
                    </li>
                  </ul>
                </div>
                <div className="card card3">
                  <h4>Recommended Jobs</h4>
                  <h5>You Have None Yet.</h5>
                </div>
              </div>
            </div>
            <div className="cards2">
              <div className="grid">
                <div className="card">
                  <h4>My Learning</h4>
                  <h5>You Have None Yet.</h5>
                </div>
                <div className="card">
                  <h4>Community Updates</h4>
                  <h5>You Have None Yet.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          className={`fa-2x menu`}
          icon={showSideNav ? faTimes : faBars}
          onClick={toggleSideNav}
        />
      </div>
    </>
  );
};

export default JobSeekerDashboard;
