import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";



export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container text-center">
            {store.auth === false ? <Navigate to="/"/> : null}
                <div className="row align-items-start mt-5">
                    <div className="col">

                    </div>
                    <div className="col">
                        <h4 className="display-4">Welcome to your private area</h4>
                        <br></br>
                     <img src={"https://picsum.photos/id/294/500/600"}></img>
                    </div>
                    <div className="col">
                   
                       

                    </div>
                </div>
            </div>
        </>

    );
};