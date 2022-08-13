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
import React from "react";
import { useColorway } from "../hooks/useColorway";
import { RevatureWorkExperience } from "./work-experience";
import { RevatureEducation, FIUEducation } from "./education";

export const Resume = () => {
  useColorway("teal", "white");

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
              <RevatureWorkExperience/>
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
                <RevatureEducation/>
              <hr />
                <FIUEducation/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
