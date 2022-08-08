import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as Switch,
} from "react-router-dom";
import { Resume } from "../resume/resume";
import { Example } from "../example/example";
import { LandingPage } from "../landing-page/landing-page";

export const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/example" element={<Example />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<LandingPage />} />
        </Switch>
      </div>
    </Router>
  );
};
