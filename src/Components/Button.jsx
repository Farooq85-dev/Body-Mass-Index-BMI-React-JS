import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { MdNotStarted } from "react-icons/md";
import { GiRegeneration } from "react-icons/gi";

function MuiButton({ innerTxt, icon, redirect, click }) {
  const navigate = useNavigate();
  const toBmi = () => {
    navigate("/bmi");
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "calcu":
        return <MdNotStarted className="w-6 h-6" />;
      case "generate":
        return <GiRegeneration className="w-6 h-6" />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={redirect === "toBmi" ? toBmi : null || click}
        endIcon={getIcon(icon)}
      >
        {innerTxt}
      </Button>
    </div>
  );
}

export default MuiButton;
