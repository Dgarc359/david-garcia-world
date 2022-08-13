import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const RevatureWorkExperience = () => {
  const currentExperienceText = "June 2021 - "; 
  // the reason this is its own const is because the whitespace after '-' wasn't being added
  // there might be a better way to do this...

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
        <ul>
          <li>
            Support Observability Implementations team by finding root cause
            issues to common AWS Synthetic Canary errors and writing 
            documentation to guide future error resolution
          </li>
          <li>
            Leveraged D3 to create custom data visualizations including Left to
            Right trees and Force Directed Network Graphs, integrated with React
          </li>
          <li>
            Create AWS Cloud Infrastructure design documents, 
            and analyze cost on designed infrastructure to inform critical
            Infrastructure design decisions.
          </li>
          <li>
            Developed a standard for our teams testing workflow, including
            laying the foundation for testing best practices, developing
            foundational tests leveraging jest to serve as an example,
            and increasing our code coverage from 0% to 40% across three of our
            main product's repositories.
          </li>
        </ul>
        {/* Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
        in deserunt aspernatur est reprehenderit sunt hic. Nulla
        tempora soluta ea et odio, unde doloremque repellendus iure,
        iste. */}
      </p>
    </div>
  );
}