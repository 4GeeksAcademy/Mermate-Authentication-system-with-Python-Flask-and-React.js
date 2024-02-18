import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignup = () => {
        actions.signup(email, password);
    
    };


    return (
        <>
            <div className="container text-center">
                <h1>Sign Up</h1>
                <br />
                <form className="w-50 mx-auto ">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSignup}
                    >
                        Sign up
                    </button>

                    <Link to="/">
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{margin:"5px"}}
                       
                    >
                        Back to home
                    </button>
                    </Link>
                </form>
            </div>
        </>
    );
};

