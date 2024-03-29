import { useState } from "react";
import SearchBar from "../components/common/SearachBar";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import { Box } from "@mui/material";
import ContextValue from "../components/common/ContextValue";
import HomeCards from "../components/pokeCardHome/HomeCards";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchBar search={search} setSearch={setSearch} />
        <ContextValue
          color="#fdf0d5"
          bgcolor="#003049"
          position="absolute"
          top="150px"
          left="30px"
        />
      </Box>
      <HomeCards search={search} />
      <ScrollTopBtn />
    </>
  );
}
