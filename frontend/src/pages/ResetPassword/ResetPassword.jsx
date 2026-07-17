import { useState } from "react";
import { Link } from "react-router-dom";

// import "./ResetPassword.css";

function ResetPassword() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // TODO:
        // Reset Password API

    };

    return (

        <div className="reset-password-page">

            <div className="reset-password-card">

                <h1>Reset Password</h1>

                <p>Create your new password.</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>New Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="reset-btn"
                    >
                        Reset Password
                    </button>

                </form>

                <Link
                    to="/login"
                    className="back-login"
                >
                    Back to Login
                </Link>

            </div>

        </div>

    );
}

export default ResetPassword;