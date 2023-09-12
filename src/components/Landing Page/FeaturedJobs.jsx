import { Link } from "react-router-dom";

import Item from "./Item";

const FeaturedJobs = ({ jobs }) => {
  return (
    <div className="featured-jobs">
      <div className="container">
        <div className="featured-title">
          <h2>Explore Featured Jobs</h2>
          <Link to="/jobs">View All</Link>
        </div>
        <div className="featured-items">
          {jobs.map((job) => (
            <Item key={job.id} job={job} />
          ))}
        </div>
        <div className="featured-btn">
          <Link to="/jobs">
            <button className="btn">View all jobs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
