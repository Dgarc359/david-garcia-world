import { useNavigate } from "react-router-dom";
import { useThemedColorway } from "../../../hooks";


export const ProjectChoices = () => {
  const [textColor] = useThemedColorway({
    lightMode: {
      textColor: "black"
    },
    darkMode: {
      textColor: "white"
    }
  });

   const h2Style = {
    padding: "0em 1em",
  }

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div id="Personal">
        <h2 style={h2Style}>Personal</h2>
        <ul style={{
          textAlign: "left",
          color: textColor
        }}>
          <li onClick={() => navigate("davidgarcia-world")}>
            davidgarcia.world
          </li>
          <li>
            Robots
          </li>
          <li>
            Research
          </li>
        </ul>
      </div>
      <div id="Professional">
        <h2 style={h2Style}>Professional</h2>
      </div>
    </div>
  );
}