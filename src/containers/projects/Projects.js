import "./Project.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio.js";

export default function Projects() {

  return (
    <div className="main" id="opensource">
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
