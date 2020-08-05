import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./auth/Home";
import Signup from "./auth/Signup";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/login" component={Login}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
