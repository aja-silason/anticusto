import { useNavigate } from "react-router-dom";
import { USER_DATA_ROLE, USER_TOKEN_STORAGE } from "../../utils/storageVariables";
import React, { useEffect } from "react";
import { childRoute } from "./T";

export const ProtectedRouteSaler = ({children}: childRoute) => {

    const navigate = useNavigate();
    const token: string | null = localStorage?.getItem(USER_TOKEN_STORAGE);
    const role: string | null = localStorage?.getItem(USER_DATA_ROLE);

    const parsedToken = token && JSON.parse(token);
    const parsedRole = role && JSON?.parse(role);

    useEffect(() => {
        if(!parsedToken || parsedRole !== "saler"){
            localStorage.clear();
            navigate("/", {replace: true});
        }

    }, [navigate, parsedToken, parsedRole]);

    if(!parsedToken || parsedRole !== "saler"){
        return null;
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}