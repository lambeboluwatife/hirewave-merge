import { Link } from "react-router-dom";
import userIcon from "/Group 274.png";
import briefcaseIcon from "/Group 275.png";

const SignUpModal = ({ modalContent, toggleModal }) => {
  return (
    <div className="sign-up-modal">
      <h2>{modalContent.head}</h2>
      <div className="grid">
        <div className="modal-card">
          <img className="modal-icon" src={userIcon} alt="briefcase icon" />
          <h3>Job Seeker</h3>
          <Link to={modalContent.link}>{modalContent.btn}</Link>
        </div>
        <div className="modal-card">
          <img
            className="modal-icon"
            src={briefcaseIcon}
            alt="briefcase icon"
          />
          <h3>Employer</h3>
          <Link to={modalContent.employer}>{modalContent.btn}</Link>
        </div>
      </div>
      <div className="close-modal">
        <button className="btn" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
