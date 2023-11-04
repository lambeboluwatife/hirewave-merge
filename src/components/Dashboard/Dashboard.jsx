import { useState, useEffect } from "react";
import SideNav from "../SideNav";
import { dashboardData } from "../../data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Hirewave | Employer's Dashboard";
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
          <div className="dashboard">
            <div className="dashboard-header">
              <h2>Dashboard</h2>
              <div className="search-bar">
                <div>
                  <input type="search" name="search" placeholder="Search" />
                  <img src="/search.png" alt="" />
                </div>
              </div>
              <div>
                <img className="user-img" src="/user.png" alt="" />
                <img className="dropdown" src="/dropdown.png" alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="grid grid-3">
                {dashboardData.map((data, index) => (
                  <div className="card" key={index}>
                    <h6>{data.head}</h6>
                    <h2>{data.figure}</h2>
                    <img src={data.img} alt="" />
                  </div>
                ))}
                <div className="card card2">
                  <h4>Suggested Candidates</h4>
                  <h6>View All</h6>
                  <h5>None Yet.</h5>
                </div>
                <div className="card card2">
                  <h4>Published Jobs</h4>
                  <h5>None Yet.</h5>
                </div>
                <div className="card card3">
                  <h4>Applicants</h4>
                  <div className="card3-content">
                    <h6>Full Name</h6>
                    <h6>Job Title</h6>
                    <h6>Status</h6>
                    <h6>Date</h6>
                  </div>
                  <h5>You have not received any applications yet.</h5>
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

export default Dashboard;
