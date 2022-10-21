import "./App.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Cv from "./Cv";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Intro />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Cv />
    </div>
  );
}
