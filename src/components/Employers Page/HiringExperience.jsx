const HiringExperience = ({ data }) => {
  return (
    <div className="hiring-experience">
      <div className="container">
        <h2>A Simplified Hiring Experience</h2>
        <div className="experience-box">
          {data.map((item) => (
            <div
              className={
                item.reverse ? "experience-data reverse" : "experience-data"
              }
              key={item.id}
            >
              <div className="experience-image">
                <svg
                  className="svg-box"
                  xmlns="http://www.w3.org/2000/svg"
                  width="459"
                  height="299"
                  viewBox="0 0 459 299"
                  fill="none"
                >
                  <path
                    d="M0.121094 18.6115C0.121094 8.84841 8.03567 0.933838 17.7988 0.933838H440.383C450.146 0.933838 458.06 8.84841 458.06 18.6115V298.717H0.121094V18.6115Z"
                    fill="black"
                  />
                </svg>
                <img src={item.image} alt="" />
                <svg
                  className="svg-rectangle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="574"
                  height="10"
                  viewBox="0 0 574 10"
                  fill="none"
                >
                  <path
                    d="M0 0.922119H574V3.9481C574 3.9481 547.859 10.0001 518.194 10.0001C488.53 10.0001 85.4696 9.69746 55.8056 9.69746C26.1415 9.69746 0 3.9481 0 3.9481V0.922119Z"
                    fill="url(#paint0_linear_1028_1070)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1028_1070"
                      x1="287"
                      y1="0.922119"
                      x2="287"
                      y2="10.0001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80868A" />
                      <stop offset="1" stopColor="#2A2C2F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="experience-content">
                <h4>{item.title}</h4>
                <h6>{item.text}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringExperience;
