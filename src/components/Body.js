import React from 'react'
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import DnsSharpIcon from '@mui/icons-material/DnsSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import DeveloperModeSharpIcon from '@mui/icons-material/DeveloperModeSharp';

const Body = () => 
    <section className='landing'>
        <div className='container'>
            <div className='socials'>
                <a href='https://facebook.com' target='_blank' rel="noreferrer"><i class="uil uil-facebook-f"></i></a>
                <a href='https://github.com' target='_blank' rel="noreferrer"><i class="uil uil-github"></i></a>
            </div>
            <div className='info'>
                <h1>Front-end and Web Developer</h1>
                <h3>Hi, I'm Jeevan kumar</h3>
                <p>Highly accomplished and user-focused Software Developer 
                    capable of building both responsive and non-responsive websites and applications.

                </p>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
            <div className='profile-area'>
                <div className='outer-circle'>
                    <span>{<CodeSharpIcon/>}</span>
                    <span>{<DnsSharpIcon/>}</span>
                    <span>{<DesignServicesSharpIcon/>}</span>
                    <span>{<DeveloperModeSharpIcon/>}</span>
                </div>
                <div className='inner-circle'>
                    <img src='./myImage.jpeg' alt='img'></img>
                </div>
            </div>
        </div>
    </section>

export default Body