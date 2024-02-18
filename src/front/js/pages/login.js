import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Login = () => {

    // dar memoria  a las variables 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //destructuring
     const { store, actions } = useContext(Context);

function sendData(e){
    e.preventDefault()
    console.log("send data")
    console.log(email, password)

    actions.login(email, password)

    
}

    return (
        <div>
            {store.auth===true?<Navigate to = "/private"/> : "Login to acces to your private area"}
          
          <form className="w-50 mx-auto " onSubmit={sendData}> 
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                    <input 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </div>
        
    );
};