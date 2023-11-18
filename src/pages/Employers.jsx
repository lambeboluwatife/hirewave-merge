import { useEffect } from "react";
import Hero from "../components/Employers Page/Hero";
import EmployersJumbotron from "../components/Employers Page/EmployersJumbotron";
import HiringExperience from "../components/Employers Page/HiringExperience";
import Note from "../components/Employers Page/Note";
import PostJob from "../components/Employers Page/PostJob";

import experienceData from "../data/hiringExperience";
import cards from "../data/employersCard";

import employersImage from "/Rectangle 505.jpg";

const Employers = ({ postJob, loggedIn }) => {
  useEffect(() => {
    document.title = "Hirewave | Employers Page";
  }, []);

  const employersShowcase = {
    title: "Connecting Talent \nWith Opportunity",
    text: "We’ve made hiring effortless with just few clicks! \nCheck it out!",
    button: "Post A Job",
    image: employersImage,
    link: "/post-jobs",
  };

  return (
    <>
      <Hero showcase={employersShowcase} />
      <EmployersJumbotron cards={cards} />
      <HiringExperience data={experienceData} />
      <Note />
      <PostJob postJob={postJob} loggedIn={loggedIn} />
    </>
  );
};

export default Employers;
