import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const FIUEducation = () => {

  return (
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
  );
}