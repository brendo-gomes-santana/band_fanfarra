import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Patrocinio from "./Pages/Patrocinio";
export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/patrocinio" element={ <Patrocinio/> }/>
            </Routes>
        </Router>
    )
}