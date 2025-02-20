import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginMail from "./Screens/LoginMail";
import Home from "./Screens/Home";
import Register from "./Screens/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginMail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
