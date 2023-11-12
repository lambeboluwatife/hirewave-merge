import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SignIn from "./components/AuthPages/SignIn";
import SignUp from "./components/AuthPages/SignUp";

import EmployerSignIn from "./components/AuthPages/EmployerSignIn";
import EmployerSignUp from "./components/AuthPages/EmployerSignUp";

import Resource from "./pages/Resource";
import Jobs from "./pages/Jobs";
import Support from "./pages/Support";
import Home from "./pages/Home";
import Employers from "./pages/Employers";

import { db } from "./dexie";
import { useLiveQuery } from "dexie-react-hooks";

import Notifications from "./components/Notifications";
import NotFound from "./components/NotFound";
import SignUpModal from "./components/AuthPages/SignUpModal";
import SignInModal from "./components/AuthPages/SignInModal";
import Dashboard from "./components/Dashboard/Dashboard";
import JobSeekerDashboard from "./components/Dashboard/JobSeekerDashboard";
import JobDetails from "./components/JobDetails";

const App = () => {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [dropdown, setDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [createdJobs, setCreatedJobs] = useState([]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const jobsFromDB = useLiveQuery(() => db.jobs.reverse().toArray(), []);

  useEffect(() => {
    setCreatedJobs(jobsFromDB);
  }, [jobsFromDB]);

  const logUser = async (user) => {
    const { email, password } = user;

    // Check if user exists in Dexie database
    const users = await db.users.toArray();

    users.find((user) => {
      if (user.email === email && user.password === password) {
        setShowNotification(!showNotification);
        setLoggedIn(!loggedIn);
        setCurrentUser(user);
        setNotificationText(`Signed In as ${user.name}`);
        setNotificationType("success");
        if (user.type === "job seeker") {
          navigate("/job-seeker/dashboard", { replace: true });
        } else {
          navigate("/employer/dashboard", { replace: true });
        }
      } else {
        setShowNotification(!showNotification);
        setNotificationText("Invalid email or password");
        setNotificationType("error");
      }
    });
  };

  const postJob = async (jobInfo) => {
    const {
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
    } = jobInfo;

    // check if a particular job exists in database
    const jobs = await db.jobs.toArray();

    const existingJob = jobs.find((job) => {
      if (job.jobPosition === jobPosition && job.companyName === companyName) {
        return;
      }
    });

    if (existingJob) {
      setShowNotification(!showNotification);
      setNotificationText(
        `There's already a job vacancy for ${jobPosition} in ${companyName}`
      );
      setNotificationType("error");
    } else {
      // add new job
      await db.jobs.add({
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
      navigate("/jobs", { replace: true });
      setShowNotification(!showNotification);
      setNotificationText("Job Posted");
      setNotificationType("success");
    }
  };

  const addUser = async (user) => {
    const { name, email, password, reminder, type, createdAt } = user;

    // Check if name already exists in  database
    const users = await db.users.toArray();

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setShowNotification(!showNotification);
      setNotificationText(`${email} already registered`);
      setNotificationType("error");
    } else {
      // Add the new user!
      await db.users.add({
        name,
        email,
        password,
        reminder,
        type,
        createdAt,
      });
      navigate("/sign-in", { replace: true });
      setShowNotification(!showNotification);
      setNotificationText("Account Created, you can now sign in");
      setNotificationType("success");
    }
  };

  return (
    <div>
      <Header
        dropdown={dropdown}
        toggleDropdown={toggleDropdown}
        loggedIn={loggedIn}
        currentUser={currentUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employers"
          element={<Employers postJob={postJob} loggedIn={loggedIn} />}
        />
        <Route path="/resources" element={<Resource />} />
        <Route path="/jobs" element={<Jobs createdJobs={createdJobs} />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sign-in" element={<SignIn onLogin={logUser} />} />
        <Route path="/sign-up" element={<SignUp onAdd={addUser} />} />
        <Route
          path="/employer/sign-in"
          element={<EmployerSignIn onLogin={logUser} />}
        />
        <Route
          path="/employer/sign-up"
          element={<EmployerSignUp onAdd={addUser} />}
        />
        <Route path="/auth/sign-in" element={<SignInModal />} />
        <Route path="/auth/sign-up" element={<SignUpModal />} />

        <Route path="/employer/dashboard" element={<Dashboard />} />
        <Route
          path="/job-seeker/dashboard"
          element={<JobSeekerDashboard currentUser={currentUser} />}
        />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNotification && (
        <Notifications text={notificationText} type={notificationType} />
      )}
      {showNotification &&
        setTimeout(() => {
          setShowNotification(false);
        }, 3000)}
      <Footer />
    </div>
  );
};

export default App;
