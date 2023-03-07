import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js"
import Register from "./components/Register.js"

export default function App() {

    

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Register/>} />
        </Routes>
      </BrowserRouter>
  );
}

