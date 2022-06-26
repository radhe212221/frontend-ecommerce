import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './style.css'
export const AppContext = React.createContext();
const Root = () => {
  const [state, setState] = useState({
    tags: [],
    products: [],
    users: [],
    cart: [],
    orders: [],
    user: null,
    loggedin: false,
    filters: ["old", "new", "rating", "discount"],
    tagname: "",
    col: "id",
    order: true,
    search: "",
    loading:false,
  });

  const value = { state, setState };
  return (
    <AppContext.Provider value={value}>
      <App />
    </AppContext.Provider>
  );
};

const el = document.getElementById("root");
const root = createRoot(el);
root.render(<Root />);
