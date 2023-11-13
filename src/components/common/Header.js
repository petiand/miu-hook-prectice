import {
  Typography,
  Toolbar,
  CardActionArea,
  Button,
  Box,
} from "@mui/material";
import ContextValue from "./ContextValue";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { pokeBall } from "../../assets/images";
import ToggleMode from "./ToggleMode";
import FavoritButton from "../pokeCardFavorit/FavoritButton";

export default function Header() {
  let navigate = useNavigate();

  const onNavigation = () => {
    navigate("/about");
  };
  return (
    <>
      <Toolbar
        sx={{
          bgcolor: "#003049",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: 1,
          borderColor: "black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardActionArea
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 220,
              border: "none",
              p: 1,
              borderRadius: 6,
            }}
          >
            <img
              src={pokeBall}
              alt="pokebalimage"
              style={{ height: 35, width: 35 }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#f2e8cf",
                ml: 1,
              }}
            >
              POKE CODEX
            </Typography>
          </CardActionArea>
          <ContextValue color="#003049" bgcolor="#fdf0d5" />
          <ToggleMode />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <FavoritButton />
          <Button onClick={onNavigation} variant="h5" sx={{ color: "#f2e8cf" }}>
            {"About"}
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}
