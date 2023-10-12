import { useState } from "react";
import moment from "moment/moment";
import Notifications from "../Notifications";

const PostJob = ({ postJob, loggedIn }) => {
  const [jobPosition, setJobPosition] = useState("");
  const [contractType, setContractType] = useState("");
  const [flexibility, setFlexibility] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [duties, setDuties] = useState("");
  const [aboutCandidate, setAboutCandidate] = useState("");
  const [compensations, setCompensations] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [recruiting, setRecruiting] = useState(false);
  const postedAt = moment().format("MMM D, YYYY");

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (loggedIn === false) {
      setShowNotification(!showNotification);
      setNotificationText("You need to be logged in");
      setNotificationType("error");
      return;
    }

    if (
      !jobPosition &&
      !contractType &&
      !flexibility &&
      !location &&
      !role &&
      !duties &&
      !aboutCandidate &&
      !compensations &&
      !companyName &&
      !logo &&
      !aboutCompany
    ) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter all fields");
      setNotificationType("warning");
      return;
    }

    if (!jobPosition) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Job Position");
      setNotificationType("warning");
      return;
    }

    if (!contractType) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Contract Type");
      setNotificationType("warning");
      return;
    }

    if (!flexibility) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Job Flexibility");
      setNotificationType("warning");
      return;
    }

    if (!location) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Job Location");
      setNotificationType("warning");
      return;
    }

    if (!role) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Job Role");
      setNotificationType("warning");
      return;
    }

    if (!duties) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Job Duties");
      setNotificationType("warning");
      return;
    }

    if (!aboutCandidate) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter About Candidate");
      setNotificationType("warning");
      return;
    }

    if (!compensations) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Compensations and Benefits Details");
      setNotificationType("warning");
      return;
    }

    if (!companyName) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Company Name");
      setNotificationType("warning");
      return;
    }

    if (!logo) {
      setShowNotification(!showNotification);
      setNotificationText("Upload Company Logo");
      setNotificationType("warning");
      return;
    }

    if (!aboutCompany) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter Company Info");
      setNotificationType("warning");
      return;
    }

    postJob({
      jobPosition,
      contractType,
      flexibility,
      location,
      role,
      duties,
      aboutCandidate,
      compensations,
      companyName,
      logo,
      aboutCompany,
      recruiting,
      postedAt,
    });

    setJobPosition("");
    setContractType("");
    setFlexibility("");
    setLocation("");
    setRole("");
    setDuties("");
    setAboutCandidate("");
    setCompensations("");
    setCompanyName("");
    setLogo("");
    setAboutCompany("");
    setRecruiting(false);
  };

  return (
    <>
      <div className="container">
        <div className="post-job">
          <h2>Post a job</h2>
          <h6>Tell us about your job and its requirements.</h6>

          <form onSubmit={onSubmit}>
            <h3>JOB DETAILS</h3>
            <hr />
            <div className="grid">
              <div className="input-box">
                <h4>
                  Job Position <sup>&#42;</sup>
                </h4>
                <input
                  type="text"
                  name="position"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>
              <div className="input-box">
                <h4>
                  Contract Type <sup>&#42;</sup>
                </h4>
                <input
                  type="text"
                  name="type"
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                />
              </div>
              <div className="input-box">
                <h4>
                  Flexibility <sup>&#42;</sup>
                </h4>
                <input
                  type="text"
                  name="flexibility"
                  value={flexibility}
                  onChange={(e) => setFlexibility(e.target.value)}
                />
              </div>
              <div className="input-box">
                <h4>
                  Location <sup>&#42;</sup>
                </h4>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <h3>JOB REQUIREMENTS</h3>
            <hr />
            <div className="input-box">
              <h4>
                The Role <sup>&#42;</sup>
              </h4>
              <textarea
                value={role}
                onChange={(e) => setRole(e.target.value)}
                name="role"
                id=""
              ></textarea>
            </div>
            <div className="input-box">
              <h4>
                Duties <sup>&#42;</sup>
              </h4>
              <textarea
                value={duties}
                onChange={(e) => setDuties(e.target.value)}
                name="duties"
                id=""
              ></textarea>
            </div>
            <div className="input-box">
              <h4>
                About Candidate <sup>&#42;</sup>
              </h4>
              <textarea
                value={aboutCandidate}
                onChange={(e) => setAboutCandidate(e.target.value)}
                name="about-candidate"
                id=""
              ></textarea>
            </div>
            <div className="input-box">
              <h4>
                Compensation & Benefits <sup>&#42;</sup>
              </h4>
              <textarea
                value={compensations}
                onChange={(e) => setCompensations(e.target.value)}
                name="compensations"
                id=""
              ></textarea>
            </div>
            <h3>Your Company</h3>
            <hr />
            <div className="grid">
              <div className="input-box">
                <h4>
                  Company Name <sup>&#42;</sup>
                </h4>
                <input
                  type="text"
                  name="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <h4>
                  Upload Company Logo <sup>&#42;</sup>
                </h4>
                <input
                  type="file"
                  name="logo"
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                />
              </div>
            </div>
            <div className="input-box">
              <h4>
                About Company <sup>&#42;</sup>
              </h4>
              <textarea
                value={aboutCompany}
                onChange={(e) => setAboutCompany(e.target.value)}
                name="about-company"
                id=""
              ></textarea>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id=""
                  checked={recruiting}
                  value={recruiting}
                  onChange={(e) => setRecruiting(e.currentTarget.checked)}
                />
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
      {showNotification && (
        <Notifications text={notificationText} type={notificationType} />
      )}
      {showNotification &&
        setTimeout(() => {
          setShowNotification(false);
        }, 3000)}
    </>
  );
};

export default PostJob;
