import "./resume.css";
import headshot from "../../assets/headshot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHome,
  faEnvelope,
  faAsterisk,
  faEarth,
  faSuitcase,
  faCalendarAlt,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Resume = () => {
  const currentExperienceText = "June 2021 - ";
  return (
    <div>
      <div className="content margin-top" style={{ maxWidth: "1400px" }}>
        <div className="row-padding two-column">
          <div className="third text-align-left">
            <div className="white text-grey card-4">
              <div className="display-container">
                <img src={headshot} style={{ width: "100%" }} alt="Avatar" />
                <h2 style={{ textAlign: "center" }}>David Garcia</h2>
                <div className="display-bottomleft container text-black"></div>
              </div>
              <div className="container text-grey">
                <p>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="margin-right large text-teal"
                  />
                  Software Engineer
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faHome}
                    className="margin-right large text-teal"
                  />
                  Miami, Florida
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="margin-right large text-teal"
                  />
                  dgarc359@gmail.com
                </p>
                <hr />
                <p className="large">
                  <FontAwesomeIcon
                    icon={faAsterisk}
                    className="margin-right text-teal"
                  />
                  Skills
                </p>
                <p>Typescript</p>
                <p>AWS CDK</p>
                <p>Python</p>
                <p>Frontend Development</p>
                <p>Backend Development</p>
                <hr />
                <p>
                  <FontAwesomeIcon
                    icon={faEarth}
                    className="margin-right text-teal"
                  />
                  Languages
                </p>
                <p>English</p>
                <p>Spanish</p>
              </div>
            </div>
            <br />
          </div>
          <div className="twothird text-align-left">
            <div className="container card white margin-bottom">
              <h2
                className="text-grey padding-16"
                style={{
                  marginBottom: "2px",
                }}
              >
                <FontAwesomeIcon
                  icon={faSuitcase}
                  className="margin-right xxlarge text-teal"
                />
                Work Experience
              </h2>
              <div className="container">
                <h5
                  className="opacity small-margin-bottom"
                  style={{
                    marginTop: "2px",
                  }}
                >
                  <b>Software Engineer | Revature</b>
                </h5>
                <h6 className="text-teal">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="margin-right large"
                  />
                  {currentExperienceText}
                  <span className="tag teal round margin-left">Current</span>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                  in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                {/* <hr></hr> */}
              </div>
            </div>
            <div className="container card white">
              <h2
                className="text-grey padding-16"
                style={{ marginBottom: "1px" }}
              >
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="margin-right xxlarge text-teal"
                />
                Education
              </h2>
              <div className="container">
                <h5 className="opacity small-margin-bottom small-margin-top">
                  <b>Revature Coding Bootcamp</b>
                </h5>
                <h6 className="text-teal">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="margin-right"
                  />
                  2021
                </h6>
                <p>Full Stack Java / React bootcamp</p>
              </div>
              <hr />
              <div className="container">
                <h5 className="opacity small-margin-bottom small-margin-top">
                  <b>
                    Florida International University | Business Administration -
                    Marketing
                  </b>
                </h5>
                <h6 className="text-teal">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="margin-right"
                  />
                  2020
                </h6>
                <p>Bachelor's Degree</p>
                {/* <hr/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="container teal center margin-top">

        <p>Find me on social media!</p>
        <FontAwesomeIcon icon={faGithub} />{" "}
        <FontAwesomeIcon icon={faLinkedin} />
      </footer>
      <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        ></a>
        <br />
        This work is licensed under a{" "}
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International License
        </a>
    </div>
  );
};
