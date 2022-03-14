import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={"/contacts"}
                element={
                    <PrivateRoute>
                        <Contacts />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default AppRouter;
