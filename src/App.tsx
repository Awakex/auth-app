import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AuthControl from "./components/AuthControl";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <AuthControl />
            <AppRouter />
            <ToastContainer position={"bottom-left"} />
        </BrowserRouter>
    );
}

export default App;
