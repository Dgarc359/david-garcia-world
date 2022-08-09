import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as Switch,
} from "react-router-dom";
import { Resume } from "../resume/resume";
import { Example } from "../example/example";
import { LandingPage } from "../landing-page/landing-page";
import { Navbar } from "../navbar/navbar";

export const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/example" element={<Example />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<LandingPage />} />
        </Switch>
      </div>
    </Router>
  );
};
