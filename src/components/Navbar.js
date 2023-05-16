import React from 'react'

const Navbar = () =>
    <nav>
        <div className='container'>
            <a href='#'><h3>Jeevan</h3></a>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact Me</a></li>
            </ul>
            <button><span class="material-symbols-sharp">menu</span></button>
            <button><span class="material-symbols-sharp">close</span></button>
        </div>
    </nav>

export default Navbar