import React from 'react'

const Contact = () => 
    <section className='contact' id='contact'>
        <div className='overlay'>
            <div className='container'>
                <h1>Let's Talk</h1>
                <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me via email at <b>jeevankumarhari2002@gmail.com</b></p>
                <form action="https://formspree.io/f/mpzgqbvg" method="POST">
                    <input type='text' name='Name' placeholder='Name' required />
                    <input type='email' name='Email' placeholder='Email' required />
                    <input type='text' name='Subject' placeholder='Subject' required />
                    <textarea name='Message' placeholder='Message' required />
                    <input type='submit' value="Submit" className='btn btn-primary' />
                </form>
            </div>
        </div>
    </section>

export default Contact