import React from "react";
import { Navigate } from "react-router-dom";
import { useStores } from "../hooks/use-stores";

const PrivateRoute = ({ children }: any) => {
    const { authStore } = useStores();
    return authStore.isAuthorize ? children : <Navigate to="/" />;
};

export default PrivateRoute;
