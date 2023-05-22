import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';

const App = () => 
    <div>
        <Navbar/>
        <Body/>
        <About/>
        <Skills/>
    </div>

export default App;
