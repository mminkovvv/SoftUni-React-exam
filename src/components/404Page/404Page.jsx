import "./404page.css";

import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className="error-page">
                <p>404</p>
                <Link to={'/'} className="go-home">Go home</Link>
        </div>
    );
};