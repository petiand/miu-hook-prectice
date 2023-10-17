import { Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function FavoritButton() {
  let navigate = useNavigate();

  const onNavigation = useCallback(() => {
    navigate("/favorit");
  },[]);

  return (
    <Button
      variant="outlined"
      onClick={onNavigation}
      sx={{
        p: 1,
        border: 1,
        borderRadius: 1,
        width: 120,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold", mr: "8px" }}>
        FAVORITS
      </Typography>
      <StarIcon />
    </Button>
  );
}
