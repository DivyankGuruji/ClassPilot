import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        // Backend aane ke baad yahan API call hogi

        navigate("/dashboard");

    };

    return (

        <div className="login-page">

            <div className="login-container">

                {/* Left */}

                <div className="login-left">

                    <div className="login-brand">

                        <h1>ClassPilot</h1>

                        <p>Smart Coaching Management System</p>

                    </div>

                    <div className="login-content">

                        <h2>Welcome Back 👋</h2>

                        <p>Login to continue.</p>

                        <form onSubmit={handleSubmit}>

                            <Input
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />

                            <Input
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />

                            <div className="login-options">

                                <label className="remember-me">

                                    <input type="checkbox" />

                                    Remember Me

                                </label>

                                <Link
                                    to="/forgot-password"
                                    className="forgot-password"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            <Button
                                type="submit"
                                text="Login"
                                fullWidth
                            />

                        </form>

                    </div>

                </div>

                {/* Right */}

                <div className="login-right">

                    <div className="login-info">

                        <h2>Manage Everything From One Dashboard</h2>

                        <p>

                            Attendance, Fees, Students,
                            Teachers, Reports, Homework
                            and much more.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;