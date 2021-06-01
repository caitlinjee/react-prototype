import React from "react";

import RowBox from "./components/RowBox/RowBox";
import NavBar from "./components/NavBar/NavBar";
import Drawer from "./components/Drawer/Drawer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginOrRegister from "./pages/LoginOrRegister";
import Intents from "./pages/Intents";
import IntentDetail from "./pages/IntentDetail";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div>
      {/*<NavBar />
      <h1 style={{padding: 50, textAlign: "center"}}>Intents</h1>
      <RowBox text = "hello"></RowBox>
      */}
      <Register />
    </div>
  );
}

export default App;
