import { Button, Menu, MenuItem } from "@mui/material";
import { pokeBall } from "../../assets/images";
import FavoritButton from "../pokeCardFavorit/FavoritButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useState } from "react";

export default function MenuIcon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();

  const onNavigationHome = () => {
    navigate("/");
  };

  const onNavigationAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={pokeBall}
          alt="pokebalimage"
          style={{ height: 35, width: 35 }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: "1px", "& .MuiMenu-paper": { backgroundColor: "#003049" } }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button
            onClick={onNavigationHome}
            variant="h5"
            sx={{ color: "#f2e8cf" }}
          >
            {"Home"}
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FavoritButton />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            onClick={onNavigationAbout}
            variant="h5"
            sx={{ color: "#f2e8cf" }}
          >
            {"About"}
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}
