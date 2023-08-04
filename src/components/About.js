import React from 'react'

const About = () => 
    <section className='about' id='about'>
        <h1>About</h1>
        <div className='container'>
            <div className='image'>
                <img src='./myImg2.jpeg' alt='img'></img>
            </div>
            <div className='info'>
                <p>Hi there! I'm Jeevan kumar, a passionate and skilled Front-end Developer with a creative flair for crafting immersive digital experiences. I specialize in building visually stunning and user-friendly websites that leave a lasting impression. With a keen eye for detail and a strong commitment to delivering top-notch code, I'm dedicated to creating web solutions that not only meet client expectations but exceed them.
                </p>
                <p> I have a solid foundation in HTML, CSS, and JavaScript, enabling me to bring designs to life with pixel-perfect precision and seamless functionality. I keep up-to-date with the latest trends and best practices in front-end development to ensure cutting-edge and responsive designs.
                </p>
                <p>  In today's mobile-first world, it's crucial for websites to look and function flawlessly across various devices. I'm adept at creating responsive designs that adapt elegantly to different screen sizes and I ensure that my code is thoroughly tested to work seamlessly on all major browsers, guaranteeing a consistent user experience for every visitor.</p>
                <a href='resume.pdf' className='btn btn-primary' download={true}><i class="uil uil-import"></i>Download CV</a>
            </div>
        </div>
    </section>

export default About