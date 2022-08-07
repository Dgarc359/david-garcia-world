import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as Switch,
} from "react-router-dom";
import { Resume } from "../resume/resume";
import { Example } from "../example/example";

export const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" element={<Example />} />
          <Route path="/resume" element={<Resume />} />
        </Switch>
      </div>
    </Router>
  );
};
