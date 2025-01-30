import { useNavigate } from "react-router-dom";
import { USER_DATA_ROLE, USER_TOKEN_STORAGE } from "../../utils/storageVariables";
import { childRoute } from "./T";
import React, { useEffect } from "react";

export const ProtectedRouteStock = ({children}: childRoute) => {

    const navigate = useNavigate();

    const token: string | null = localStorage?.getItem(USER_TOKEN_STORAGE);
    const role: string | null = localStorage?.getItem(USER_DATA_ROLE);

    const parsedToken = token && JSON.parse(token);
    const parsedRole = role && JSON.parse(role);

    useEffect(() => {

        if(!parsedToken || parsedRole !== "stock"){
            localStorage.clear();
            navigate("/", {replace: true});
        }

    }, [navigate, token, role]);

    if(!parsedToken || parsedRole !== "stock"){
        return null;
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
