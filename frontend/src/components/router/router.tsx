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
            <Route path="choices" element={<ProjectChoices/>}/>
            <Route path="davidgarcia-world" element={<DavidGarciaWorld/>}/>
          </Route> 

          <Route path="*" element={<UnderConstruction primary="black" />} />      
        </Switch>
        <Footer />
      
    </Router>
    </div>
  );
};
