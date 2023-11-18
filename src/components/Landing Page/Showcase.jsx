import { Link, useLocation } from "react-router-dom";
import homeImage from "/home_image.webp";

const Showcase = ({ showcase }) => {
  const location = useLocation();

  const mainImageMobile = (
    <img src={homeImage} alt="showcase image" className="mobile-img" />
  );

  return (
    <div
      className={`showcase home ${
        location.pathname === "/" ? "lightblue" : ""
      }`}
    >
      <div className="container">
        <svg
          className="main-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="158"
          height="96"
          viewBox="0 0 158 96"
          fill="none"
        >
          <path
            d="M144.829 48.4697C122.324 37.7522 98.7914 39.9445 79.0745 55.5029C68.9794 63.4688 77.9264 84.1253 88.5656 74.2353C98.4869 65.0126 83.3479 44.366 75.7154 39.4515C59.155 28.7883 41.2803 24.2378 22.892 18.2512"
            stroke="#96B300"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21.9948 12.271C19.6183 12.9032 7.49463 14.0349 12.2139 17.7242C14.6192 19.6045 16.5955 22.4912 18.945 24.5504"
            stroke="#96B300"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M145.926 42.1904C146.814 43.1222 155.249 49.8543 155.192 51.422C155.139 52.8543 152.933 52.3115 151.986 52.6956C149.425 53.7335 147.705 53.5255 145.447 55.3071"
            stroke="#96B300"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="showcase-content">
          <h1>{showcase.title}</h1>
          <h6>{showcase.text}</h6>
          <div className="home-search">
            <input type="search" name="home-search" className="search-input" />
            <svg
              className="home-search-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.71429 15.4286C12.8702 15.4286 15.4286 12.8702 15.4286 9.71429C15.4286 6.55837 12.8702 4 9.71429 4C6.55837 4 4 6.55837 4 9.71429C4 12.8702 6.55837 15.4286 9.71429 15.4286Z"
                stroke="#6D6D6D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.0812 20L13.7144 13.7143"
                stroke="#6D6D6D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="home-search-svg2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 21.1886L12.7211 20.376C13.5394 19.4389 14.2754 18.5497 14.9303 17.704L15.4708 16.9909C17.728 13.9497 18.8571 11.536 18.8571 9.752C18.8571 5.944 15.7874 2.85715 12 2.85715C8.21254 2.85715 5.14282 5.944 5.14282 9.752C5.14282 11.536 6.27197 13.9497 8.52911 16.9909L9.06968 17.704C10.0039 18.901 10.9813 20.0626 12 21.1886Z"
                stroke="#6D6D6D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12.5714C13.5779 12.5714 14.8571 11.2922 14.8571 9.71429C14.8571 8.13633 13.5779 6.85715 12 6.85715C10.422 6.85715 9.14282 8.13633 9.14282 9.71429C9.14282 11.2922 10.422 12.5714 12 12.5714Z"
                stroke="#6D6D6D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="line"></div>
            <div className="home-search-placeholder">
              <div>
                <h6>Search job title or keyword</h6>
              </div>
              <div>
                <h6 className="home-search-placeholder2">Location</h6>
              </div>
            </div>
            <button className="home-search-button">Search</button>
          </div>
        </div>
        <div className="container">
          <center>
            <img src={homeImage} alt="showcase image" className="mobile-img" />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
