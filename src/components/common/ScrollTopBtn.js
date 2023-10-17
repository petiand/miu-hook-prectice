import { useState } from "react";
import BaseBtn from "./BaseBtn";

export default function ScrollTopBtn() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    }

    window.addEventListener('scroll',(event) => {
        handleScroll()
    });

    return (
        <>
        { scrollTop > 450 && <BaseBtn
            text="scroll top"
            onClick={scrollToTop}
            width="120px"
            position="fixed"
            bottom= "20px"
            right= "45px"
            zIndex= "1" 
        />}
        </>
    )
}