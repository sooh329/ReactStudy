import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Start from './pages/Start.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';


function App() {
    return(
        <>
            <BrowserRouter>
                <nav>
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'about'}>About</NavLink>
                  <NavLink to={'contact'}>Contact</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <footer>footer입니다.</footer>
            </BrowserRouter>
        </>
    )
}

export default App;
