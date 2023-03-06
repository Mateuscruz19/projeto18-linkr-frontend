import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

export default function App() {

    

  return (
    <ContainerApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component/>} />
          <Route path="/login" element={<Component/>} />
          <Route path="/cadastro" element={<Component/>} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`

  height: 100%;
  min-height: 100vh;
  background-color: black; 

`;
