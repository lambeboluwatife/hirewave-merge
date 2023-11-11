import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedinIn,
  FaClipboardList,
} from "react-icons/fa";

import { db } from "../dexie";
import Loading from "./Loading";

const JobDetails = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [job, setJob] = useState({});

  const findJob = async () => {
    const jobsFromDB = await db.jobs.toArray();

    setJob(jobsFromDB.find((job) => job.id == params.id));
    setLoading(false);
  };
  findJob();

  return loading ? (
    <Loading />
  ) : (
    <div className="job-details">
      <div className="job-details-header">
        <div className="container grid">
          <div>
            {" "}
            <h1>{job.jobPosition}</h1>
            <span>at</span> <h1 className="job-position">{job.companyName}</h1>
            <div className="company-info">
              <h6>{job.aboutCompany}</h6>
            </div>
            <div className="job-details-header-btn">
              <button>VIEW COMPANY</button>
              <button>APPLY FOR THIS JOB</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="job-content">
        <div className="container">
          <div className="grid">
            <div className="about-role">
              <h5>About this role</h5>
              <div className="job-info">
                <div className="icon-box">
                  <img
                    src={job.logo}
                    className="icon-item"
                    alt="company's logo"
                  />
                </div>
                <div className="job-info-content">
                  <h5>{job.jobPosition}</h5>
                  <h6>
                    {job.companyName} - {job.location}
                  </h6>
                  <div className="contract-type">
                    <span>{job.contractType}</span>
                    <span>{job.flexibility}</span>
                  </div>
                </div>
              </div>
              <div className="role">
                <h5>Description</h5>
                <h6>{job.role}</h6>
              </div>
              <div className="role">
                <h5>Qualification</h5>
                <h6>{job.aboutCandidate}</h6>
              </div>
              <div className="role">
                <h5>Duties</h5>
                <h6>{job.duties}</h6>
              </div>
              <div className="role compensation">
                <h5>Compensation</h5>
                <h6>{job.compensations}</h6>
              </div>
            </div>
            <div className="share-job">
              <div className="container">
                <div className="share-links">
                  <div className="share-box">
                    <FaClipboardList className="fa" />
                    Apply for this job
                  </div>
                  <div className="share-box social">
                    <FaFacebookSquare className="fa" />
                    Share on Facebook
                  </div>
                  <div className="share-box social">
                    <FaTwitterSquare className="fa" />
                    Share on Twitter
                  </div>
                  <div className="share-box social">
                    <FaLinkedinIn className="fa" />
                    Share on LinkedIn
                  </div>
                </div>
                <div className="company-info2">
                  <h4>{job.companyName}</h4>
                  <h6>{job.aboutCompany}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
