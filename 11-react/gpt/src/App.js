import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;