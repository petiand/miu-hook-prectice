import { BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Header"
import Body from "./Body";
import AppDescription from "./AppDescription";

export default function Screen() {

    

    return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="description" element={<AppDescription />} />
            </Routes>
        </BrowserRouter>
    </>
)}