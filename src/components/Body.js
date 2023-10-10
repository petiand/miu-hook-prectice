import { useState } from "react";
import Cards from "./Cards";
import SearchBar from "./SerachBar";
import BaseBtn from "./BaseBtn";

export default function Body() {

    const [search, setSearch] = useState("")

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />
            <Cards search={search}/>
            <BaseBtn
                    text="scroll top"
                    onClick={scrollToTop}
                    width="120px"
                    position="fixed"
                    bottom= "20px"
                    right= "45px"
                    zIndex= "1" 
                /> 
        </>
    )
}