const PostJob = () => {
  return (
    <>
      <div className="container">
        <div className="post-job">
          <h2>Post a job</h2>
          <h6>Tell us about your job and its requirements.</h6>

          <form action="/post-job" name="post-job" method="POST">
            <h3>JOB DETAILS</h3>
            <hr />
            <div className="grid">
              <div className="input-box">
                <h4>
                  Job Position <sup>&#42;</sup>
                </h4>
                <input type="text" name="position" required />
              </div>
              <div className="input-box">
                <h4>
                  Contract Type <sup>&#42;</sup>
                </h4>
                <input type="text" name="type" required />
              </div>
              <div className="input-box">
                <h4>
                  Flexibility <sup>&#42;</sup>
                </h4>
                <input type="text" name="flexibility" required />
              </div>
              <div className="input-box">
                <h4>
                  Location <sup>&#42;</sup>
                </h4>
                <input type="text" name="location" required />
              </div>
            </div>
            <h3>JOB REQUIREMENTS</h3>
            <hr />
            <div className="input-box">
              <h4>
                The Role <sup>&#42;</sup>
              </h4>
              <textarea required name="role" id=""></textarea>
            </div>
            <div className="input-box">
              <h4>
                Duties <sup>&#42;</sup>
              </h4>
              <textarea required name="duties" id=""></textarea>
            </div>
            <div className="input-box">
              <h4>
                About Candidate <sup>&#42;</sup>
              </h4>
              <textarea required name="about-candidate" id=""></textarea>
            </div>
            <div className="input-box">
              <h4>
                Compensation & Benefits <sup>&#42;</sup>
              </h4>
              <textarea required name="compensations" id=""></textarea>
            </div>
            <h3>Your Company</h3>
            <hr />
            <div className="grid">
              <div className="input-box">
                <h4>
                  Company Name <sup>&#42;</sup>
                </h4>
                <input type="text" name="position" required />
              </div>
              <div className="input-box">
                <h4>
                  Upload Company Logo <sup>&#42;</sup>
                </h4>
                <input type="text" name="type" required />
              </div>
            </div>
            <div className="input-box">
              <h4>
                About Company <sup>&#42;</sup>
              </h4>
              <textarea required name="about-company" id=""></textarea>
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="" required />
                <span>Actively Recruiting</span>
              </div>
            </div>

            <center>
              <button className="btn">Post For Free</button>
            </center>
          </form>
        </div>
      </div>
      <div className="post-job-notice">
        <div className="container">
          <h2>Open Hirewave in desktop view to post a job for free.</h2>
        </div>
      </div>
    </>
  );
};

export default PostJob;
