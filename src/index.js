import React, { useState } from "react";
import { createRoot } from "react-dom/client";

export const AppContext = React.createContext();

const Root = () => {
  const [state, setState] = useState({
    users: [],
    products: [],
    cart: [],
    orders: [],
    user: null,
    loggedin: false,
    tags: [],
    filters: ["old", "new", "rating", "discount"],
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
