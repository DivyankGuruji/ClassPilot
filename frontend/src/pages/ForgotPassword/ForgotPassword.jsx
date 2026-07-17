import { Link } from "react-router-dom";
// import "./ForgotPassword.css";

function ForgotPassword() {

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO:
        // Send Reset Link API
    };

    return (
        <div className="forgot-password-page">

            <div className="forgot-password-card">

                <h1>Forgot Password</h1>

                <p>
                    Enter your registered email address.
                    We'll send you a password reset link.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="forgot-btn"
                    >
                        Send Reset Link
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

export default ForgotPassword;