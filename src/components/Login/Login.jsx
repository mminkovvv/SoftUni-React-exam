import "./Login.css";
import { useContext } from "react";

import { UseForm } from "../../hooks/useForm.js";
import { AuthContext } from "../../contexts/authContext.jsx";

export const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = UseForm(loginSubmitHandler, {
        email: '',
        password: '',
    });

    return (
        <div className="login">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email.."
                        value={values.email}
                        onChange={onChange} />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password.."
                        value={values.password}
                        onChange={onChange} />

                    <input type="submit" defaultValue="Login" />
                </form>
                <p>
                    Don't have an account? <a href="/register">Register here</a>
                </p>
            </div>
        </div>
    );
};

