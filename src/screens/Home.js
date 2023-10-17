import { useState } from "react";
import SearchBar from "../components/common/SerachBar";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import ContextInput from "../components/common/ContextInput";
import { Box } from "@mui/material";
import ContextValue from "../components/common/ContextValue";
import HomeCards from "../components/pokeCardHome/HomeCards";

export default function Home() {

    const [search, setSearch] = useState("")

    return (
        <>
        <Box
            sx ={
                {my:5, 
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"center", 
                    justifyContent:'center'}}
        >
            <ContextInput />
            <SearchBar
                search={search}
                setSearch={setSearch}
            />
            <ContextValue 
                color="#fdf0d5"
                bgcolor="#003049"
                position="absolute"
                top= "150px"
                left= "30px"
            />
        </Box>
        <HomeCards 
            search={search}
        />
        <ScrollTopBtn />
        </>
    )
}