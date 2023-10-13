import SideNav from "../SideNav";
import { dashboardData } from "../../data/services";

const Dashboard = () => {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
