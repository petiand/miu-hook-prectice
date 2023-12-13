import { Typography, Toolbar, CardActionArea, Box } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import ToggleMode from "./ToggleMode";

import MenuIcon from "./MenuIcon";
import ToggleView from "./ToggleView";
import SearchBar from "./SearachBar";
import useGetScreenWidth from "../../hooks/useGetScreenWidth";

export default function Header() {
  const screenwWidth = useGetScreenWidth();
  console.log(screenwWidth);
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
              //variant="h5"
              sx={{
                color: "#f2e8cf",
                fontSize: { xs: 15, sm: 20, md: 30, lg: 30 },
                mr: 1,
              }}
            >
              POKE CODEX
            </Typography>
          </CardActionArea>
          <ToggleMode />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {screenwWidth > 600 && <SearchBar />}
          <ToggleView />
          <MenuIcon />
        </Box>
      </Toolbar>
    </>
  );
}
