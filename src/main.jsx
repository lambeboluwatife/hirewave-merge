import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./styles/employers.css";
import "./styles/sign-up.css";
import "./styles/responsiveness/landingPage.css";
import "./styles/responsiveness/employers.css";
import "./styles/responsiveness/notFound.css";
import "./styles/dashboard.css";
import "./styles/responsiveness/dashboard.css";
import "./styles/job-details.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
