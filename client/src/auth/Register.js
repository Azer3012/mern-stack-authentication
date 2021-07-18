import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/authContext";
import { useHistory } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");

  const { getLoggedIn } = useContext(Context);

  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      await axios.post("http://localhost:8000/auth/", registerData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2 className="text-center">Register a new acount</h2>
      <form onSubmit={register} className="d-flex flex-column col-md-6">
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
        <div className="form-group">
          <label>Password Verify</label>
          <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setpasswordVerify(e.target.value)}
          value={passwordVerify}
          className="form-control"
        />
         
        </div>

        
        
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default Register;
