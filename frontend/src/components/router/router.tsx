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
import { UnderConstruction } from "../under-construction/under-construction";
import { Footer } from "../footer/footer";

export const RouterComponent = () => {
  return (
    <Router>
      <div
        className="full-height"
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <Navbar />
        <Switch>
          <Route path="/example" element={<Example />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<LandingPage />} />

          <Route path="/book" element={<UnderConstruction />} />
          <Route path="/projects" element={<UnderConstruction />} />
          <Route path="/about-me" element={<UnderConstruction />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
