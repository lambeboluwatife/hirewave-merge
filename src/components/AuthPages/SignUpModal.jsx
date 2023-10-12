import { Link } from "react-router-dom";
import userIcon from "/Group 274.png";
import briefcaseIcon from "/Group 275.png";

const SignUpModal = () => {
  return (
    <div className="sign-up-modal">
      <h2>Create Account</h2>
      <div className="modal-cards">
        <div className="modal-card">
          <img className="modal-icon" src={userIcon} alt="briefcase icon" />
          <h3>Job Seeker</h3>
          <Link to="/sign-up">Sign Up</Link>
        </div>
        <div className="modal-card">
          <img
            className="modal-icon"
            src={briefcaseIcon}
            alt="briefcase icon"
          />
          <h3>Employer</h3>
          <Link to="/employer/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
