import { Typography, Toolbar, CardActionArea, Box } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import ToggleMode from "./ToggleMode";

import MenuIcon from "./MenuIcon";
import ToggleView from "./ToggleView";

export default function Header() {
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
              border: "none",

              borderRadius: 6,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#f2e8cf",

                mr: 1,
              }}
            >
              POKE CODEX
            </Typography>
          </CardActionArea>
          <ToggleMode />
        </Box>
        <ToggleView />
        <MenuIcon />
      </Toolbar>
    </>
  );
}
