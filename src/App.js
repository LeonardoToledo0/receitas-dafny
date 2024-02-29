import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./Componentes/NavBar/NavBar";
import { GlobalStyles } from "./StyleGlobal";


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>

    </Router>
  );
}

export default App;