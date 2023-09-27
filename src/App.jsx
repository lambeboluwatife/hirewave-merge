import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import Resource from "./pages/Resource";
import Jobs from "./pages/Jobs";
import Support from "./pages/Support";
import Home from "./pages/Home";
import Employers from "./pages/Employers";

import { db } from "./dexie";
import { useLiveQuery } from "dexie-react-hooks";

import Notifications from "./Notifications";
import NotFound from "./components/NotFound";

const App = () => {
  const navigate = useNavigate();

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const jobs = useLiveQuery(() => db.jobs.toArray());

  const logUser = async (user) => {
    const { email, password } = user;

    // Check if user exists in Dexie database
    const users = await db.users.toArray();

    const userToLogIn = users.find((user) => {
      if (user.email === email && user.password === password) {
        const firstName = user.name.split(" ")[0];
        navigate("/", { replace: true });
        setShowNotification(!showNotification);
        setLoggedIn(!loggedIn);
        setUserName(`${firstName}`);
        setNotificationText(`Signed In as ${user.name}`);
        setNotificationType("success");
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
      setNotificationText(`${email} already registered`);
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
      setShowNotification(!showNotification);
      setNotificationText("Job Posted");
      setNotificationType("success");
    }
  };

  const addUser = async (user) => {
    const { name, email, password, reminder, createdAt } = user;

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
        userName={userName}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/employers"
          element={<Employers postJob={postJob} loggedIn={loggedIn} />}
        />
        <Route path="/resources" element={<Resource />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sign-in" element={<SignIn onLogin={logUser} />} />
        <Route path="/sign-up" element={<SignUp onAdd={addUser} />} />
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
