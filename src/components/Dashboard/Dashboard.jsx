import { useEffect } from "react";
import SideNav from "../SideNav";
import { dashboardData } from "../../data/services";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Hirewave | Employer's Dashboard";
  }, []);
  return (
    <>
      <div className="column left">
        <SideNav />
      </div>
      <div className="column right">
        <div className="container">
          <div className="dashboard">
            <div className="dashboard-header">
              <h2>Dashboard</h2>
              <div className="search-bar">
                <div>
                  <input type="search" placeholder="Search" />
                  <img src="/search.png" alt="" />
                </div>
              </div>
              <div>
                <img style={{ width: "40px" }} src="/user.png" alt="" />
                <img className="dropdown" src="/dropdown.png" alt="" />
              </div>
            </div>
            <div className="cards">
              <div className="grid grid-3">
                {dashboardData.map((data) => (
                  <div className="card">
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
      </div>
    </>
  );
};

export default Dashboard;
