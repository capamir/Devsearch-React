import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
  Home,
  Profile,
  Login,
  Register,
  ForgotPassword,
  Projects,
} from "./screens";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/message" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
