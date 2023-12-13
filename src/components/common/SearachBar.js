import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { usePokemon } from "../../hooks/usePokemon";

export default function SearchBar() {
  const { setSearch } = usePokemon();

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
          borderRadius: 3,
          px: "8px",
          bgcolor: "whitesmoke",
          width: 70,
          "&:focus-within": {
            width: "calc(80vw - 16px)",
          },
          transition: "width 1s",
          "@media (min-width: 500px)": {
            "&:focus-within": {
              width: 300,
            },
          },
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#003049",
          },

          disabled: "true",
        }}
        value={localSearch}
        onChange={onChangeSerchBar}
        id="search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          disabled: "true",
        }}
      />
    </>
  );
}
