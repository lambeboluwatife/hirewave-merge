import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notifications from "../Notifications";

const SignIn = ({ onLogin }) => {
  useEffect(() => {
    document.title = "Hirewave | Sign In";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter email and password");
      setNotificationType("warning");
      return;
    }

    if (!email) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter email");
      setNotificationType("warning");
      return;
    }

    if (!password) {
      setShowNotification(!showNotification);
      setNotificationText("Please enter password");
      setNotificationType("warning");
      return;
    }

    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="sign-in">
        <div className="grid">
          <div className="sign-in-form">
            <div className="container">
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
              <div className="sign-in-details">
                <div className="container">
                  <h6>Please enter your details to sign in</h6>
                  <form onSubmit={onSubmit}>
                    <div className="input-box">
                      <h6>Email</h6>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <h6>Password</h6>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" name="reminder" id="" />
                      <span>Remember me</span>
                    </div>

                    <button className="form-button">Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="sign-in-img-area">
            <div className="container">
              <div className="content-container">
                <div className="container">
                  <h3>
                    YOUR JOURNEY BEGINS <br /> HERE!
                  </h3>
                  <hr />
                  <h6>
                    Where innovation meets impact, and your <br /> aspirations
                    meet achievements.
                  </h6>
                  <h6>
                    Ready to shape your future with us? Let’s take <br /> the
                    first step together.
                  </h6>

                  <h4>No Account Yet?</h4>
                  <div className="link">
                    <h3>
                      <Link to="/sign-up">Sign up</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default SignIn;
