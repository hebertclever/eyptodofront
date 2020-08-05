import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>EyptoDo</h1>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Home;
