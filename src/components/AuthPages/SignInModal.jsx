import { Link } from "react-router-dom";
import userIcon from "/Group 274.png";
import briefcaseIcon from "/Group 275.png";

const SignInModal = () => {
  return (
    <div className="sign-up-modal">
      <h2>Login to your account</h2>
      <div className="modal-cards">
        <div className="modal-card">
          <img className="modal-icon" src={userIcon} alt="briefcase icon" />
          <h3>Job Seeker</h3>
          <Link to="/sign-in">Sign In</Link>
        </div>
        <div className="modal-card">
          <img
            className="modal-icon"
            src={briefcaseIcon}
            alt="briefcase icon"
          />
          <h3>Employer</h3>
          <Link to="/employer/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
