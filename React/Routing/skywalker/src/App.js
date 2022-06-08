import { Route, Routes, Navigate, useParams, createContext } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Display from "./components/Display";
function App() {

  return (
    <div>
      <Home />
        <Routes>
          <Route path='/:type/:id' element={<Display />} />
        </Routes>
    </div>
  );
}

export default App;
