import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DocumentUpload from './components/DocumentUpload';
import DocumentAnalysis from './components/DocumentAnalysis';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<DocumentUpload />} />
        <Route path="/analysis/:id" element={<DocumentAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;