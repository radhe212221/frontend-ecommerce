import React, { useContext, useState } from "react";
import { AppContext } from "../index";
import axios from "../lib/axios";
export default function Signup() {
  const { state, setState } = useContext(AppContext);
  const [ob, setob] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const signup=async ()=>{
    let resp=await axios.post("/signup",ob).then(res=>res.data)
    if(resp?.status)
    {
      alert("signup done")
    }
    else{
      alert(resp?.err)
    }
  }
  return (
    <div>
      <h1>Signup</h1>
      <input
        placeholder="name"
        value={ob?.name}
        onChange={({target}) => setob({ ...ob, name: target.value })}
      />
      
      <input
        placeholder="email"
        value={ob?.email}
        onChange={({target}) => setob({ ...ob, email: target.value })}
      />
      <input
        placeholder="phone"
        value={ob?.phone}
        onChange={({target}) => setob({ ...ob, phone: target.value })}
      />

      
      <input
        placeholder="password"
        value={ob?.password}
        onChange={({target}) => setob({ ...ob, password: target.value })}
      />

      <button onClick={signup}>Signup</button>
    </div>
  );
}
