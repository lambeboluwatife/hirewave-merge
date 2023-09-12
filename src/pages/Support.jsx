import React, { useEffect } from "react";
import SHeader from "../components/SHeader/SHeader";
import Topic from "../components/topic/Topic";
import Question from "../components/question/Question";

const Support = () => {
  useEffect(() => {
    document.title = "Hirewave | Support";
  }, []);
  return (
    <>
      <SHeader />
      <Topic />
      <Question />
    </>
  );
};

export default Support;
