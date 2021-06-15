import React from "react";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <div className="header">
      <Navbar />
      </div>
      <div className="App">
      <LoginForm />
    </div>
    </div>
  );
}

export default App;
