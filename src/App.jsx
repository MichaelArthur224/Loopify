import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./frontend/Nav.jsx"; 
import Home from './frontend/Home.jsx'; 
import About from './frontend/About.jsx'; 
import Login from './frontend/Login.jsx'; 
import Contact from './frontend/Contact.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar always displayed */}
        <Nav />  
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



