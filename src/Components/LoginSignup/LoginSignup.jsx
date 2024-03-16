import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
    const [form, setForm] = useState({});
    const [action, setAction] = useState("Login");
    const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
    const [successMessage, setSuccessMessage] = useState(""); // State to hold success message
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false); // State to control the visibility of the signup form

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8000/users/login", {
                method: "POST",
                body: JSON.stringify(form),
                headers: { "Content-type": "application/json" },
            });
            const data = await response.json();
            console.log("Data received from server:", data);
            console.log("response", response);

            if (response.ok) {
                setIsAuthenticated(true); // Set isAuthenticated to true on successful login
                setSuccessMessage("Login successful!"); // Set success message state
                // Clear success message after 2 seconds
              
            } else {
                setErrorMessage(data.message || "Invalid username or password"); // Set error message state
                // Clear error message after 2 seconds
                setTimeout(() => {
                    console.log(data.message);
                    setErrorMessage("Unable to login. Please try again later.");
                }, 4000);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage("An error occurred while logging in. Please try again later."); // Set error message state
            // Clear error message after 2 seconds
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
        }
    };

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                body: JSON.stringify(form),
                headers: { "Content-type": "application/json" },
            });
            if (response.ok) {
                setSuccessMessage("User successfully registered"); // Set success message state
                // Clear success message after 2 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 2000);
                const data = await response.json();
                console.log(data);
            } else {
                // If the response status is not ok, handle error message
                const { message } = await response.json();
                setErrorMessage(message); // Set error message state
                // Clear error message after 2 seconds
                setTimeout(() => {
                    setErrorMessage("");
                }, 2000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleForm = () => {
        setShowSignupForm(!showSignupForm);
        setAction(action === "Login" ? "Sign up" : "Login");
    };

    return (
        <div className="container">
            <div className="login-container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form>
                    <div className="inputs">
                        <div className="input">
                            <input
                                type="text"
                                name="Username"
                                onChange={handleForm}
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                name="Password"
                                onChange={handleForm}
                                placeholder="Enter Password"
                            />
                        </div>
                        {showSignupForm && (
                            <React.Fragment>
                                <div className="input">
                                    <input
                                        type="email"
                                        name="Email"
                                        onChange={handleForm}
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className="input">
                                    <input
                                        type="text"
                                        name="Number"
                                        onChange={handleForm}
                                        placeholder="Enter Class"
                                    />
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                    <div className="submit-container">
                        <button
                            className="submit"
                            onClick={action === "Login" ? handleLogin : handleSignup}
                        >
                            {action}
                        </button>
                        <div className="signup-link">
                            {action === "Login" ? (
                                <span onClick={toggleForm}>Sign up</span>
                            ) : (
                                <span onClick={toggleForm}> Login</span>
                            )}
                        </div>
                    </div>
                </form>
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
                {/* Render error message if present */}
                {successMessage && (
                    <div className="success-message">{successMessage}</div>
                )}
                {/* Render success message if present */}
            </div>
            {isAuthenticated && (
                <div className="dashboard-container">
                    <h2>Welcome to Dashboard!</h2>
                    {/* Your dashboard content here */}
                </div>
            )}
        </div>
    );
};

export default LoginSignup;
