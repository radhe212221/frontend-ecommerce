import React, { useContext } from "react";
import { AppContext } from "../index";
import { Link } from "react-router-dom";
export default function Header() {
  const { state, setState } = useContext(AppContext);
  const { user, loggedin, cart, orders } = state;

  const logout = () => {};
  return (
    <div>
      <Link to="/">home</Link>
      {!loggedin && <Link to="/Login">Login</Link>}
      {!loggedin && <Link to="/Signup">Signup</Link>}
      {loggedin && <Link to="/Cart">Cart ({cart.length || 0})</Link>}
      {loggedin && <Link to="/Orders">Orders ({orders.length || 0})</Link>}
      {loggedin && (
        <Link onClick={logout}>Logout ({user?.name || "Guest"})</Link>
      )}
    </div>
  );
}
