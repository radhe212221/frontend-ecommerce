import React, { useContext, useState } from "react";
import { AppContext } from "../index";
import axios from "../lib/axios";
export default function Login() {
  const { state, setState } = useContext(AppContext);
  const [ob, setob] = useState({
    email: "",
    password: "",
  });

  const login=async ()=>{
    let resp=await axios.post("/login",ob).then(res=>res.data)
    console.log(resp)

  }
  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="email"
        value={ob?.email}
        onChange={({target}) => setob({ ...ob, email: target.value })}
      />
      
      <input
        placeholder="password"
        value={ob?.password}
        onChange={({target}) => setob({ ...ob, password: target.value })}
      />

      <button onClick={login}>login</button>
    </div>
  );
}
