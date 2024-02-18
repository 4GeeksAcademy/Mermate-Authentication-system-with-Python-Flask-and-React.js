import React, { useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
				{store.auth === true ? <button onClick={() => actions.logout()} className="btn btn-danger" style={{ marginLeft: "1rem" }}>Logout</button> : null}
				</div>
			</div>
		</nav>
	);
};
