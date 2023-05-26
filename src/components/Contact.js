import React from 'react'

const Contact = () => 
    <section className='contact' id='contact'>
        <div className='overlay'>
            <div className='container'>
                <h1>Let's Talk</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus.</p>
                <form>
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