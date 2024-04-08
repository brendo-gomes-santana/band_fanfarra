import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthProvide from "../Contexts";

import Home from "../Pages/Home";
import Patrocinio from "../Pages/Patrocinio";
import Login from "../Pages/Login";

import Logado from "./logado";
import Painel from "../Pages/Painel";
import Fale_conosco from "../Pages/Fale_conosco";

export default function Rotas() {
    return (
        <Router>
            <AuthProvide>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="/patrocinio"
                        element={<Patrocinio />} />
                    <Route
                        path="/login"
                        element={<Login />} />
                    <Route
                        path="/painel"
                        element={
                            <Logado>
                                <Painel />
                            </Logado>
                        } />
                    <Route
                        path="/fale-conosco"
                        element={
                            <Fale_conosco/>
                        }   
                        />
                </Routes>
            </AuthProvide>
        </Router>
    )
}