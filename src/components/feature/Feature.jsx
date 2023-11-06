import React from "react";
import {
  Active,
  Container,
  FeaturedContainer,
  FeaturedOptions,
  FeaturedTitle,
  FeaturedWrapper,
  FilterContainer,
  FilterForm,
  FilterSelect,
  FilterSpan,
  FilterText,
  FilterTitle,
  LogoDesWrapper,
  LogoDescripton,
  LogoImg,
  LogoParagraph,
  LogoTitle,
  LogoWrapper,
  MoView,
  RightDate,
  RightLocation,
  RightWrapper,
  SVG,
  SearchLink,
  SearchTitle,
  SearchWrapper,
  TextWrapper,
} from "./feature.style";
import { jobsOptions, searchOptions } from "../../data/text";

const Feature = ({ createdJobs }) => {
  console.log(createdJobs);
  return (
    <Container>
      <FilterContainer>
        <FilterTitle>
          Filters <FilterSpan>(0)</FilterSpan>
        </FilterTitle>
        <FilterForm>
          <FilterSelect>
            <option value="industry">Industry</option>
          </FilterSelect>
          <FilterText type="text" placeholder="Role" />
          <FilterSelect>
            <option value="industry">Salary Range</option>
          </FilterSelect>
          <FilterSelect>
            <option value="industry">Contract Type</option>
          </FilterSelect>
          <FilterSelect>
            <option value="industry">Location</option>
          </FilterSelect>
          <FilterSelect>
            <option value="industry">Flexibility</option>
          </FilterSelect>
          <FilterSelect>
            <option value="industry">Experience</option>
          </FilterSelect>
        </FilterForm>
      </FilterContainer>
      <FeaturedContainer>
        <SearchTitle>Most Popular by Search</SearchTitle>
        <SearchWrapper>
          {searchOptions.map((option, index) => (
            <SearchLink to={option.to} key={index}>
              {option.title}
            </SearchLink>
          ))}
        </SearchWrapper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FeaturedTitle>Featured Jobs</FeaturedTitle>
          <MoView>View All</MoView>
        </div>
        <FeaturedOptions>
          {createdJobs?.map((job) => (
            <FeaturedWrapper key={job.id}>
              <LogoWrapper>
                <LogoImg src={job.logo} alt="Company logo" />
                <TextWrapper>
                  <LogoTitle>{job.jobPosition}</LogoTitle>
                  <LogoParagraph>{job.companyName}</LogoParagraph>
                  <LogoDesWrapper>
                    <LogoDescripton>{job.contractType}</LogoDescripton>
                    <LogoDescripton>{job.flexibility}</LogoDescripton>
                  </LogoDesWrapper>
                </TextWrapper>
              </LogoWrapper>
              <RightWrapper>
                <SVG>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.6875 3.375C14.6775 3.375 12.945 4.33031 12 5.91281C11.055 4.33031 9.3225 3.375 7.3125 3.375C5.87092 3.37674 4.48888 3.95017 3.46952 4.96952C2.45017 5.98888 1.87674 7.37092 1.875 8.8125C1.875 11.4928 3.5625 14.2941 6.88125 17.1366C8.4136 18.4405 10.0681 19.5937 11.8219 20.58C11.8766 20.6095 11.9378 20.625 12 20.625C12.0622 20.625 12.1234 20.6095 12.1781 20.58C13.9319 19.5937 15.5864 18.4405 17.1188 17.1366C20.4375 14.2941 22.125 11.4928 22.125 8.8125C22.1233 7.37092 21.5498 5.98888 20.5305 4.96952C19.5111 3.95017 18.1291 3.37674 16.6875 3.375ZM12 19.8206C10.6875 19.0744 2.625 14.2566 2.625 8.8125C2.62649 7.56975 3.12083 6.37834 3.99958 5.49958C4.87834 4.62083 6.06975 4.12649 7.3125 4.125C9.29156 4.125 10.9547 5.18531 11.6531 6.89156C11.6814 6.96034 11.7294 7.01917 11.7912 7.06057C11.853 7.10197 11.9256 7.12408 12 7.12408C12.0744 7.12408 12.147 7.10197 12.2088 7.06057C12.2706 7.01917 12.3186 6.96034 12.3469 6.89156C13.0453 5.18531 14.7084 4.125 16.6875 4.125C17.9302 4.12649 19.1217 4.62083 20.0004 5.49958C20.8792 6.37834 21.3735 7.56975 21.375 8.8125C21.375 14.25 13.3125 19.0744 12 19.8206Z"
                      fill="#090020"
                      fillOpacity="0.7"
                    />
                  </svg>
                </SVG>
                <Active>Actively Recruiting</Active>
                <RightDate>{job.postedAt}</RightDate>
                <RightLocation>{job.location}</RightLocation>
              </RightWrapper>
            </FeaturedWrapper>
          ))}

          {jobsOptions.map((job, index) => (
            <FeaturedWrapper key={index}>
              <LogoWrapper>
                <LogoImg src={job.img} alt="Company logo" />
                <TextWrapper>
                  <LogoTitle>{job.title}</LogoTitle>
                  <LogoParagraph>{job.company}</LogoParagraph>
                  <LogoDesWrapper>
                    <LogoDescripton>{job.para1}</LogoDescripton>
                    <LogoDescripton>{job.para2}</LogoDescripton>
                  </LogoDesWrapper>
                </TextWrapper>
              </LogoWrapper>
              <RightWrapper>
                <SVG>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.6875 3.375C14.6775 3.375 12.945 4.33031 12 5.91281C11.055 4.33031 9.3225 3.375 7.3125 3.375C5.87092 3.37674 4.48888 3.95017 3.46952 4.96952C2.45017 5.98888 1.87674 7.37092 1.875 8.8125C1.875 11.4928 3.5625 14.2941 6.88125 17.1366C8.4136 18.4405 10.0681 19.5937 11.8219 20.58C11.8766 20.6095 11.9378 20.625 12 20.625C12.0622 20.625 12.1234 20.6095 12.1781 20.58C13.9319 19.5937 15.5864 18.4405 17.1188 17.1366C20.4375 14.2941 22.125 11.4928 22.125 8.8125C22.1233 7.37092 21.5498 5.98888 20.5305 4.96952C19.5111 3.95017 18.1291 3.37674 16.6875 3.375ZM12 19.8206C10.6875 19.0744 2.625 14.2566 2.625 8.8125C2.62649 7.56975 3.12083 6.37834 3.99958 5.49958C4.87834 4.62083 6.06975 4.12649 7.3125 4.125C9.29156 4.125 10.9547 5.18531 11.6531 6.89156C11.6814 6.96034 11.7294 7.01917 11.7912 7.06057C11.853 7.10197 11.9256 7.12408 12 7.12408C12.0744 7.12408 12.147 7.10197 12.2088 7.06057C12.2706 7.01917 12.3186 6.96034 12.3469 6.89156C13.0453 5.18531 14.7084 4.125 16.6875 4.125C17.9302 4.12649 19.1217 4.62083 20.0004 5.49958C20.8792 6.37834 21.3735 7.56975 21.375 8.8125C21.375 14.25 13.3125 19.0744 12 19.8206Z"
                      fill="#090020"
                      fillOpacity="0.7"
                    />
                  </svg>
                </SVG>
                <Active>Actively Recruiting</Active>
                <RightDate>{job.date}</RightDate>
                <RightLocation>{job.location}</RightLocation>
              </RightWrapper>
            </FeaturedWrapper>
          ))}
        </FeaturedOptions>
      </FeaturedContainer>
    </Container>
  );
};

export default Feature;
