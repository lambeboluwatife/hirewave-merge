import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className="notes">
      <div className="container">
        <div className="note">
          <div className="author">
            <img
              src="/unsplash_ZGa9d1a_4tA.png"
              alt="author"
              className="author-image"
            />
            <div>
              {" "}
              <h3>Seun Thomas</h3>
              <h6>
                Hiring manager at <br />
                FastHub Tech
              </h6>
            </div>
          </div>
          <div className="divider"></div>
          <div className="story">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M32.7591 28.868H18.4543V39.2214H10.9658V11.0915H25.4118"
                stroke="url(#paint0_linear_1028_1048)"
                stroke-width="4.22"
                stroke-miterlimit="10"
              />
              <path
                d="M17.1299 21.4446H31.4346V11.0915H38.9232V39.2214H24.4771"
                stroke="url(#paint1_linear_1028_1048)"
                stroke-width="4.22"
                stroke-miterlimit="10"
              />
              <path
                d="M47 47H3V3H47V47Z"
                stroke="url(#paint2_linear_1028_1048)"
                stroke-width="4.22"
                stroke-miterlimit="10"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1028_1048"
                  x1="20.8418"
                  y1="149.177"
                  x2="20.8418"
                  y2="181.39"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2154AC" />
                  <stop offset="1" stop-color="#20B5BC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1028_1048"
                  x1="29.0472"
                  y1="181.39"
                  x2="29.0472"
                  y2="149.178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2154AC" />
                  <stop offset="1" stop-color="#20B5BC" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1028_1048"
                  x1="25.0001"
                  y1="141.399"
                  x2="25.0001"
                  y2="189.482"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2154AC" />
                  <stop offset="1" stop-color="#20B5BC" />
                </linearGradient>
              </defs>
            </svg>
            <h3>FastHub Tech is a fast-rising tech startup in Nigeria.</h3>
            <h6>
              Working with Hirewave has been a game-changer for our recruitment
              process at Fasthub Tech. The platform's intuitive interface and
              efficient job posting capabilities have streamlined our hiring
              efforts, allowing us to quickly connect with top- tier talent. The
              seamless application process has greatly improved candidate
              engagement, and the personalized approach to communication sets
              HireWave apart in the competitive hiring landscape. Thanks to
              HireWave, we've found exceptional candidates that perfectly fit
              our company's needs, making it an indispensable tool for our
              recruitment success.
            </h6>
            <Link to="/stories">
              <strong>See more success stories</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
