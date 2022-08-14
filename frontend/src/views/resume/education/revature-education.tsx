import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { ResumeLi } from "../common/resume-li";


export const RevatureEducation = () => {
 
  return (
    <div className="container">
      <h5 className="opacity small-margin-bottom small-margin-top">
        <b>Revature Coding Bootcamp | Full Stack Java / React Education</b>
      </h5>
      <h6 className="text-teal">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="margin-right"
        />
        2021
      </h6>
      <p>Project 3 (Stocks App)</p>
      <ul>
        <ResumeLi>
          Managed Gitflow using Git CLI and resolved merge conflicts
        </ResumeLi>
        <ResumeLi>
          Implemented Yahoo Finance API Java package in the backend to receive
          up-to-date stock information 
        </ResumeLi>
        <ResumeLi>
          Developed frontend application leveraging React
        </ResumeLi>
        <ResumeLi>
          Implemented CI / CD with Jenkins
        </ResumeLi>
      </ul>
      <p>Project 2 (Custom ORM)</p>
      <ul>
        <ResumeLi>
          Leveraged JDBC to establish connection between ORM and AWS Postgres SQL database
        </ResumeLi>
        <ResumeLi>
          Developed Unit and Integration tests using Junit and Mockito
        </ResumeLi>
      </ul>
    </div>
  );
}