/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => 
    <footer>
        <div className='container'>
            <a href='#'><h3>Jeevan Kumar</h3></a>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact Me</a></li>
            </ul>
            <div className='socials'>
                <a href='https://facebook.com' target='_blank' rel="noreferrer"><i class="uil uil-facebook-f"></i></a>
                <a href='https://github.com' target='_blank' rel="noreferrer"><i class="uil uil-github"></i></a>
            </div>
        </div>
    </footer>

export default Footer