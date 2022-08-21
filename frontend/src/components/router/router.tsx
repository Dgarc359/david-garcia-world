import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Resume, LandingPage, UnderConstruction, Projects } from "../../views";
import { Example } from "../example/example";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { DavidGarciaWorld } from "../../views/projects/views/davidgarcia-world";
import { ProjectChoices } from "../../views/projects/views/project-choices";
import { AboutMe } from "../../views/about-me/about-me";
import { AboutMeChoices } from "../../views/about-me/views/about-me-choices";
import { GymStats } from "../../views/about-me/views/gym-stats";

export const RouterComponent = () => {
  return (
    <div
        className="full-height"
        style={{
          display: "flex",
          flexFlow: "column",
        }}
        id="router"
      >
    <Router>
      
        <Navbar />
        <Switch>
          <Route path="/example" element={<Example />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<LandingPage />} />

          <Route path="/projects" element={<Projects/>}>
            <Route index element={<ProjectChoices/>}/>
            <Route path="davidgarcia-world" element={<DavidGarciaWorld/>}/>
          </Route> 

          <Route path="/about-me" element={<AboutMe/>}>
            <Route index element={<AboutMeChoices/>}/>
            <Route path="gym-stats" element={<GymStats/>}/>
          </Route>

          <Route path="*" element={<UnderConstruction primary="black" />} />      
        </Switch>
        <Footer />
      
    </Router>
    </div>
  );
};
