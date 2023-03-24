import React, { useRef, useEffect, useState } from 'react';
import Deaths from './Pages/Deaths'
import CaseFatality from './Pages/CaseFatality';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CaseFatality />} />
      <Route path="/Deaths" element={<Deaths />} />
    </Routes> 
    </BrowserRouter>
  )
}

export default App;
