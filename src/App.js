import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/BookContainer';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<p>Path is not resolved</p>} />
    </Routes>
  </BrowserRouter>
);

export default App;
