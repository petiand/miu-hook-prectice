import { Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function FavoritButton() {
  let navigate = useNavigate();

  const onNavigation = () => {
    navigate("/favorit");
  };

  return (
    <Button
      variant="outlined"
      onClick={onNavigation}
      sx={{
        p: 1,
        border: "none",
        width: 120,
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#fdf0d5", fontWeight: "bold", mr: "8px" }}
      >
        FAVORITS
      </Typography>
      <StarIcon style={{ color: "#fff220" }} />
    </Button>
  );
}
