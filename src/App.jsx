import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <Router>
      <Header dropdown={dropdown} toggleDropdown={toggleDropdown} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employers" element={<Employers />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
