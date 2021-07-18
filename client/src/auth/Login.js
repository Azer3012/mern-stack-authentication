import React, { useContext, useState } from "react";
import axios from 'axios'
import { Context } from "../context/authContext";
import { useHistory } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {getLoggedIn}=useContext(Context)
  
  const history=useHistory()

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
        
      };
      await axios.post('http://localhost:8000/auth/login',loginData)

     await  getLoggedIn()

     history.push("/")
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2 className="text-center">Log in</h2>
      <form onSubmit={login} className="d-flex flex-column col-md-6">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control"
        />
          
        </div>
       

        
        
        <button className="btn btn-primary mt-2">Log In</button>
      </form>
    </div>
  );
}

export default Login;
