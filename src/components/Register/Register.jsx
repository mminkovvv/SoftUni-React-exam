import "./Register.css";

import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext.jsx";
import { UseForm } from "../../hooks/useForm.js";

export const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = UseForm(registerSubmitHandler, {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <div className="register">
            <div className="register-box">
                <h1>Register</h1>
                <form onSubmit={onSubmit}>

                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username.."
                        value={values.username}
                        onChange={onChange} />

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

                    <label>Confirm Password</label>
                    <input type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password.."
                        value={values.confirmPassword}
                        onChange={onChange} />

                    <input type="submit" defaultValue="Register" />
                </form>
                <p>
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </div>
        </div>
    );
};