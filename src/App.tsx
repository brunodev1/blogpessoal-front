import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'

function App() {
  return (
    
      <BrowserRouter>
        
          <Navbar />
  
          <div style={{minHeight: '100vh'}}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          
          <Footer />
        
      </BrowserRouter>
    );
}

export default App;
