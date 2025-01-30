import React, { useEffect } from "react"
import { childRoute } from "./T"
import { USER_DATA_ROLE, USER_TOKEN_STORAGE } from "../../utils/storageVariables"
import { useNavigate } from "react-router-dom"

export const ProtectedRouteAdministrator = ({children}: childRoute) => {

    const navigate = useNavigate();

    const token: string | null = localStorage.getItem(USER_TOKEN_STORAGE);
    const role: string | null = localStorage.getItem(USER_DATA_ROLE);

    const storedToken = token && JSON.parse(token);
    const storedRole = role && JSON.parse(role);

    useEffect(() => {

        if(!storedToken || storedRole !== "administrator"){
            localStorage.clear();
            navigate("/", {replace: true});
        }

    }, [navigate, storedToken, storedRole]);

    if(!storedToken || storedRole !== "administrator"){
        return null;
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}