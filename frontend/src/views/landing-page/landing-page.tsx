import { LandingPageButton } from "./svg";
import React from "react";
import { GlobalContext } from "../../common";
import { useColorway } from "../../hooks";
import { url } from "inspector";
import headshot from '../../assets/headshot.jpg'
import * as router from 'react-router-dom';

export const LandingPage = () => {
  const percArr = [20,35,50,65,80] as const;
  const navigate = router.useNavigate();

  const [milestones, setMilestones] = React.useState([{name: 0}, {name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}]);
  const [milestonesPage, setMilestonesPage] = React.useState<number>(1);
  const [paginatedMilestones, setPaginatedMilestones] = React.useState(
    milestones
      .filter((el, i) =>
        (i < 5 * milestonesPage) &&!(5 * (milestonesPage - 1) > i))
  );

  console.log(paginatedMilestones);

  React.useEffect(() => {
    setPaginatedMilestones(milestones
      .filter((el, i) =>
        (i < 5 * milestonesPage) && !(5 * (milestonesPage - 1) > i)))
  }, [milestonesPage]);

  return (
  <div className="bg-blue-200 h-full w-full flex-row">
    <div id="roadmap-icon-bar">
      <span className="h-16 w-[95%] bg-orange-300 rounded-full inline-block absolute top-24 left-4"/>
      {
        paginatedMilestones
          .map((el, i) => {
            return milestonesPage > 1 
              ? i == 0
                ? <span 
                style={{
                  left: `${percArr[i]}%`
                }} 
                className={`bg-gray-600 h-16 w-8 absolute inline-block top-24 hover:cursor-pointer`}
                onClick={() => {
                  setMilestonesPage((state) => state -= 1)
                }}
              />
              : <span 
              style={{
                left: `${percArr[i]}%`
              }} 
              className={`bg-gray-600 h-16 w-8 absolute inline-block top-24`}
            />
            : i < 4 ?
                <span 
                  style={{
                    left: `${percArr[i]}%`
                  }} 
                  className={`bg-gray-600 h-16 w-8 absolute inline-block top-24`}
                />
                :
                <span 
                  style={{
                    left: `${percArr[i]}%`
                  }} 
                  className={`bg-gray-600 h-16 w-8 absolute inline-block top-24 hover:cursor-pointer`}
                  onClick={() => {
                    setMilestonesPage((state) => state += 1)
                  }}
                />
              }
          )
      }
    <div className="w-52 h-52">
      <div className="bg-gray-400 rounded-full cursor-pointer absolute" onClick={() => {
          navigate('/profile')
        }}>
          <img className="bg-gray-400 w-52 h-52 rounded-full" src={headshot} style={{ width: "100%" }} alt="Avatar" />
      </div>
    </div>
    </div>

    <div id="roadmap-log" className="w-full">
      <div className="w-1/2 m-auto text-end bg-gray-300">
        {
          paginatedMilestones
            .map((el) => <div>{el.name}</div>)
        }
      </div>
    </div>

    <div id="experience"> {/* TODO */}
        <div>Databases</div>
        <div>Frontend Tooling</div>
        <div>Backend</div>
        <div>Certificates</div>
        <div>Personal Projects</div>
        <div>Open Source Contributions</div>
    </div>
  </div>
  )

  // const { preferredTheme } = React.useContext(GlobalContext)!;

  // const lightOrDarkMode = preferredTheme[0];

  //  if(lightOrDarkMode === "white") {
  //     useColorway("white", "black");
  //   } else {
  //     useColorway("black", "white");
  //   }

  // return (
  //   <div
  //     style={{
  //       flex: "1 1 auto",
  //       display: "flex",
  //       justifyContent: "space-around",
  //       alignItems: "center",
  //     }}
  //     id="LandingPageView"
  //   >
  //     <LandingPageButton
  //       onHoverStroke={"seagreen"}
  //       icon={"file"}
  //       text="Resume"
  //       link="/resume"
  //     />
  //     <LandingPageButton
  //       onHoverStroke={"dodgerblue"}
  //       icon={"book"}
  //       text="Book"
  //       link="/book"
  //     />
  //     <LandingPageButton
  //       onHoverStroke={"violet"}
  //       icon={"wrench"}
  //       text="Projects"
  //       link="/projects"
  //     />
  //     <LandingPageButton
  //       onHoverStroke={"indianred"}
  //       icon={"user"}
  //       text="About Me"
  //       link="/about-me"
  //     />
  //   </div>
  // );
};
