import Dream from "../components/dream/Dream";
import Feature from "../components/feature/Feature";
import { Pagination } from "@mui/material";
import { Wrapper } from "../components/feature/feature.style";
import { useEffect } from "react";

const Jobs = ({ createdJobs }) => {
  useEffect(() => {
    document.title = "Hirewave | Jobs Page";
  }, []);
  return (
    <>
      <Dream />
      <Feature createdJobs={createdJobs} />
      <Wrapper>
        <Pagination count={10} shape="rounded" />
      </Wrapper>
    </>
  );
};

export default Jobs;
