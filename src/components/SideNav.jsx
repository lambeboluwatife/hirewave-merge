import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  return (
    <div className="side-nav">
      <h3 className="logo">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="21"
            viewBox="0 0 37 26"
            fill="none"
          >
            <path
              d="M20.7128 6.48899C21.3461 5.85407 21.738 4.97794 21.738 4.00994C21.738 2.07135 20.1663 0.499645 18.2277 0.499645C17.0021 0.499645 15.9246 1.12885 15.2967 2.08071C15.1299 2.24777 1.15611 19.4708 1.02549 19.6689C0.392124 20.3038 0.000244141 21.1802 0.000244141 22.1477C0.000244141 24.0865 1.57194 25.6582 3.51053 25.6582C4.73614 25.6582 5.81369 25.0293 6.44159 24.0771C6.60839 23.9101 20.5822 6.68676 20.7128 6.48899Z"
              fill="#fff"
            />
            <path
              d="M28.7983 14.6613C29.4335 14.0258 29.8261 13.1487 29.8261 12.1794C29.8261 10.2408 28.2544 8.66908 26.3158 8.66908C25.0897 8.66908 24.0116 9.2988 23.3837 10.2514C23.2156 10.4198 15.8763 19.4667 15.7449 19.666C15.1097 20.3014 14.717 21.1786 14.717 22.1477C14.717 24.0865 16.2887 25.6582 18.2273 25.6582C19.4535 25.6582 20.5315 25.0285 21.1592 24.0758C21.3273 23.9077 28.6669 14.8606 28.7983 14.6613Z"
              fill="#fff"
            />
            <path
              d="M36.4544 4.01022C36.4544 5.94908 34.8827 7.52051 32.9441 7.52051C31.0053 7.52051 29.4338 5.94908 29.4338 4.01022C29.4338 2.07162 31.0053 0.499919 32.9441 0.499919C34.8827 0.499919 36.4544 2.07162 36.4544 4.01022Z"
              fill="#fff"
            />
            <path
              d="M7.02083 4.01034C7.02083 5.9492 5.44913 7.52063 3.51053 7.52063C1.57194 7.52063 0.000244141 5.9492 0.000244141 4.01034C0.000244141 2.07175 1.57194 0.500041 3.51053 0.500041C5.44913 0.500041 7.02083 2.07175 7.02083 4.01034Z"
              fill="#fff"
            />
          </svg>
          HIREWAVE
        </Link>
      </h3>
      <div className="button">
        <button>
          <FontAwesomeIcon icon={faPlus} style={{ paddingRight: "10px" }} />
          Post a job
        </button>
      </div>
      <hr className="line" />
      <ul>
        <li>
          <a href="/dashboard">
            <img src="/dashboard.png" alt="" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/job-dashboard">
            <img src="/jobs.png" alt="" />
            Jobs
          </a>
        </li>
        <li>
          <a href="/candidates">
            <img src="/candidates.png" alt="" />
            Candidates
          </a>
        </li>
        <li>
          <a href="/settings">
            <img src="/settings.png" alt="" />
            Settings
          </a>
        </li>
        <li>
          {location.pathname === "/job-seeker/dashboard" && (
            <div className="premium">
              <h5>
                Upgrade to a <br /> premium account.
              </h5>
              <h6>
                Get access to premium <br /> features and more.
              </h6>
              <h6 className="go-premium">Go Premium</h6>
              <img src="/gift.png" alt="" />
            </div>
          )}
        </li>
        <li
          className={
            location.pathname === "/employer/dashboard" ? "log-out" : ""
          }
        >
          <a>
            {" "}
            <img src="/log-out.png" alt="" />
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
