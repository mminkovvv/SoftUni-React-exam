import { useContext, useEffect } from "react";

import * as authService from "../../services/authService.js";
import { AuthContext } from "../../contexts/authContext.jsx";


export const Logout = () => {
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => logoutHandler())
            .catch((error) => console.log(error))
    }, []);

    return null;
};