import React from 'react';
import Deaths from './Pages/Deaths'
import CaseFatality from './Pages/CaseFatality';
import CasesPer1000 from './Pages/CasesPer1000';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CaseFatality />} />
      <Route path="/Deaths" element={<Deaths />} />
      <Route path="/Casesper1000" element={<CasesPer1000 />} />
    </Routes> 
    </BrowserRouter>
  )
}

export default App;
