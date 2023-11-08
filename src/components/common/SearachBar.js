import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PokeBallIcon from "../../assets/images/icons/PokeBallIcon";

export default function SearchBar({ setSearch }) {
  const [localSearch, setLocalSearch] = useState("");

  const onChangeSerchBar = (e) => setLocalSearch(e.target.value);

  useEffect(() => {
    const searchTimeOutId = setTimeout(() => setSearch(localSearch), 500);
    return () => clearTimeout(searchTimeOutId);
  }, [localSearch, setSearch]);

  return (
    <>
      <TextField
        variant="standard"
        sx={{
          borderRadius: 4,
          px: "8px",
          bgcolor: "whitesmoke",
          width: 85,
          "&:focus-within": {
            width: 500,
          },
          transition: "width 1s",
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#003049",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#EE1515",
          },
          disabled: "true",
        }}
        value={localSearch}
        onChange={onChangeSerchBar}
        id="search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PokeBallIcon />
            </InputAdornment>
          ),
        }}
        label="Type to Search"
        InputLabelProps={{
          disabled: "true",
        }}
      />
    </>
  );
}
