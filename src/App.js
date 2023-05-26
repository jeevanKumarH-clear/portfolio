import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => 
    <div>
        <Navbar/>
        <Body/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </div>

export default App;
