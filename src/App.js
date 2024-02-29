import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./Componentes/NavBar/NavBar";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;