import { Link, Outlet } from "react-router-dom";


export const AboutMe = () => {

  return (
    <div id="AboutMe">
      {/* <Link to="about-me-choices" /> */}
      <Outlet/>
    </div>
  );
}