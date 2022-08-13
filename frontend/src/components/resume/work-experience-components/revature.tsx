import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const RevatureWorkExperience = () => {
  const currentExperienceText = "June 2021 - ";

  return (
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
              </div>
  );
}