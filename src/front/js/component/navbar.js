import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate= useNavigate

	function handleLogout(){
		actions.logout()
		navigate('/')
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
				{store.auth === true ? <button onClick={() => handleLogout()} className="btn btn-primary" style={{ marginLeft: "1rem" }}>Logout</button> : null}
				</div>
			</div>
		</nav>
	);
};
