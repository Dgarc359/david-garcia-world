import { Link, Outlet, Route, Router } from "react-router-dom";
import { useColorway, useThemedColorway } from "../../hooks";

export const Projects = () => {

  useColorway("violet", "white");

 
  

  return (
    <div id="ProjectsView">
      <Link to="choices"/>
      <Outlet/>
    </div>
  );
}