import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./Componentes/NavBar/NavBar";
import { GlobalStyles } from "./StyleGlobal";
import { Carrousel } from "./Componentes/Carrousel/Carrousel";

const Home = () => {
  return (
    <><NavBar />
      <Carrousel />
    </>
  )
}




const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;