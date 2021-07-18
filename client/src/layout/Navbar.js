import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogOut from "../auth/LogOut";
import { Context } from "../context/authContext";

function Navbar() {
  const { loggedIn } = useContext(Context);
  return (
    <div className="
    navbar navbar-expand-lg navbar-light bg-dark py-3
    d-flex align-items-center justify-content-between
    ">
      <Link to="/" className="">Home</Link>

      {loggedIn===false && (
        <div>
          <Link to="/register" className="mr-2">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}

        {loggedIn===true && (
            <>
        <Link to="/customer">Customers</Link>
        <LogOut/>
        </>
        )}
    </div>
  );
}

export default Navbar;
