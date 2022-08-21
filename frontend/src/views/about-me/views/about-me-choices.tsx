import { useNavigate } from "react-router-dom";



export const AboutMeChoices = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li onClick={() => navigate('gym-stats')}>Gym Stats</li>
      </ul>
    </div>
  );
}