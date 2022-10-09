import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Stocks from './Pages/Stocks';
import Quotes from './Pages/Quotes';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stocks />} />
        <Route path="/quotes" element={<Quotes />} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
