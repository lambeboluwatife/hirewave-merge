import { faBars, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Header = ({ dropdown, toggleDropdown, loggedIn, userName }) => {
  const location = useLocation();
  const hideHeaderForPaths = [
    "/sign-in",
    "/sign-up",
    "/employer/sign-in",
    "/employer/sign-up",
    "/employer/dashboard",
    "/candidates",
    "/settings",
    "/job-seeker/dashboard",
  ];

  if (hideHeaderForPaths.includes(location.pathname)) {
    return <></>;
  }

  const toggleModal = () => {
    setShowModal(!showModal);
    setModalContent(signInModalContent);
  };

  const toggleModal2 = () => {
    setShowModal(!showModal);
    setModalContent(signUpModalContent);
  };

  return (
    <>
      <header
        className={`header ${location.pathname === "/" ? "lightblue" : ""}`}
      >
        <h3 className="logo">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="26"
              viewBox="0 0 37 26"
              fill="none"
            >
              <path
                d="M20.7128 6.48899C21.3461 5.85407 21.738 4.97794 21.738 4.00994C21.738 2.07135 20.1663 0.499645 18.2277 0.499645C17.0021 0.499645 15.9246 1.12885 15.2967 2.08071C15.1299 2.24777 1.15611 19.4708 1.02549 19.6689C0.392124 20.3038 0.000244141 21.1802 0.000244141 22.1477C0.000244141 24.0865 1.57194 25.6582 3.51053 25.6582C4.73614 25.6582 5.81369 25.0293 6.44159 24.0771C6.60839 23.9101 20.5822 6.68676 20.7128 6.48899Z"
                fill="#1B0065"
              />
              <path
                d="M28.7983 14.6613C29.4335 14.0258 29.8261 13.1487 29.8261 12.1794C29.8261 10.2408 28.2544 8.66908 26.3158 8.66908C25.0897 8.66908 24.0116 9.2988 23.3837 10.2514C23.2156 10.4198 15.8763 19.4667 15.7449 19.666C15.1097 20.3014 14.717 21.1786 14.717 22.1477C14.717 24.0865 16.2887 25.6582 18.2273 25.6582C19.4535 25.6582 20.5315 25.0285 21.1592 24.0758C21.3273 23.9077 28.6669 14.8606 28.7983 14.6613Z"
                fill="#1B0065"
              />
              <path
                d="M36.4544 4.01022C36.4544 5.94908 34.8827 7.52051 32.9441 7.52051C31.0053 7.52051 29.4338 5.94908 29.4338 4.01022C29.4338 2.07162 31.0053 0.499919 32.9441 0.499919C34.8827 0.499919 36.4544 2.07162 36.4544 4.01022Z"
                fill="#1B0065"
              />
              <path
                d="M7.02083 4.01034C7.02083 5.9492 5.44913 7.52063 3.51053 7.52063C1.57194 7.52063 0.000244141 5.9492 0.000244141 4.01034C0.000244141 2.07175 1.57194 0.500041 3.51053 0.500041C5.44913 0.500041 7.02083 2.07175 7.02083 4.01034Z"
                fill="#1B0065"
              />
            </svg>
            HIREWAVE
          </Link>
        </h3>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/employers">For employers</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
        <div className="header-btn">
          {loggedIn ? (
            <div className="loggedUser">
              <FontAwesomeIcon
                icon={faUser}
                style={{ paddingRight: "0.5rem" }}
              />
              {`Signed In as ${userName}`}
            </div>
          ) : (
            <>
              <a href="/auth/sign-in">
                <button className="login-btn">Log in</button>
              </a>

              <a href="/auth/sign-up">
                <button className="btn">Sign up</button>
              </a>
            </>
          )}
        </div>
        <FontAwesomeIcon
          icon={dropdown ? faRemove : faBars}
          className="menu-bar"
          onClick={toggleDropdown}
        />
      </header>

      {dropdown && (
        <div className="dropdown-menu">
          <ul className="nav-links">
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/employers">For employers</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
          {loggedIn ? (
            <div className="loggedUser">
              <FontAwesomeIcon
                icon={faUser}
                style={{ paddingRight: "0.5rem" }}
              />
              {`Signed In as ${userName}`}
            </div>
          ) : (
            <>
              <a href="/auth/sign-in">
                <button className="cta2">Log in</button>
              </a>

              <a href="/auth/sign-up">
                <button className="cta">Sign up</button>
              </a>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
