import { useState } from "react";

import About from "../components/Landing Page/About";
import FAQ from "../components/Landing Page/FAQ";
import FeaturedJobs from "../components/Landing Page/FeaturedJobs";
import Jumbotron from "../components/Landing Page/Jumbotron";
import Services from "../components/Landing Page/Services";
import Showcase from "../components/Landing Page/Showcase";

import servicesData from "../data/services";
import data from "../data/jobs";
import faqsData from "../data/faq";

import homeImage from "/Rectangle 493.jpg";

const Home = () => {
  const [jobs] = useState(data);
  const [services] = useState(servicesData);
  const [faqs] = useState(faqsData);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const homeShowcase = {
    title: "Your Partner in \nHiring Excellence",
    text: "Need to discover top-tier talent for your business? Look no further. \nWe bridge the gap between fresh talent and thriving businesses.",
    button: "Explore Jobs",
    svg: true,
    image: homeImage,
    link: "/jobs",
  };

  const faqContent = {
    title: "Frequently Asked Questions",
    text: "Here you can find solutions to all your queries.",
  };

  return (
    <>
      <Showcase showcase={homeShowcase} />
      <Jumbotron />
      <About />
      <Services services={services} />
      <FeaturedJobs jobs={jobs} />
      <FAQ
        faqContent={faqContent}
        toggle={toggle}
        faqs={faqs}
        selected={selected}
      />
    </>
  );
};

export default Home;
