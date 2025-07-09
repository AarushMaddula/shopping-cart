import { Outlet } from "react-router-dom";
import { useState } from "react"

import Navbar from "./Navbar";

const App = () => {
  
  const [items, setItems] = useState([])

  return (
    <>
      <Navbar items={items} />
      <Outlet context={{items, setItems}}/>
    </>
  );
};

export default App;
