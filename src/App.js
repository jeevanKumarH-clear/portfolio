import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => 
    <div>
        <Navbar/>
        <Body/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>

export default App;
