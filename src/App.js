import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth_components/Login.jsx"
import Register from "./components/auth_components/Register.jsx"
import Posts from "./pages/PostPages/PostPages.js";

export default function App() {

    

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Register/>} />
          <Route path="/post" element={<Posts/>}/>
        </Routes>
      </BrowserRouter>
  );
}

