/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@mui/material'
import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const Navbar = () =>
    <nav>
        <div className='container'>
            <a href='#'><h3>Jeevan</h3></a>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact Me</a></li>
            </ul>
            <Button id='menuButton' className='navButton' sx={{display:'none'}} startIcon={<MenuSharpIcon/>}></Button>
            <Button id='closeButton' className='navButton' sx={{display:'none'}} startIcon={<CloseSharpIcon/>}></Button>
        </div>
    </nav>

export default Navbar