import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthProvide from "../Contexts";

import Home from "../Pages/Home";
import Patrocinio from "../Pages/Patrocinio";
import Login from "../Pages/Login";

import Logado from "./logado";
import Painel from "../Pages/Painel";

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
                </Routes>
            </AuthProvide>
        </Router>
    )
}