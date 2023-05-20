/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const About = () => 
    <section className='about' id='about'>
        <h1>About</h1>
        <div className='container'>
            <div className='image'>
                <img src='myImage.jpeg' alt='img'></img>
            </div>
            <div className='info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus. Curabitur ac pretium ligula. 
                    Etiam finibus tellus eu leo porta, eget malesuada mauris facilisis. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Sed volutpat non nisi ac vestibulum. Aenean vitae neque vitae risus efficitur consectetur quis non ex.
                    Sed quis venenatis nisi. Integer eget dignissim ex, eu efficitur turpis. Ut sit amet eleifend nibh, vitae varius massa. 
                    Integer sagittis, mi ut auctor hendrerit, massa neque sagittis nulla, eget elementum sapien dui vitae nulla.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus. Curabitur ac pretium ligula. 
                    Etiam finibus tellus eu leo porta, eget malesuada mauris facilisis. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Sed volutpat non nisi ac vestibulum. Aenean vitae neque vitae risus efficitur consectetur quis non ex.
                    Sed quis venenatis nisi. Integer eget dignissim ex, eu efficitur turpis. Ut sit amet eleifend nibh, vitae varius massa. 
                    Integer sagittis, mi ut auctor hendrerit, massa neque sagittis nulla, eget elementum sapien dui vitae nulla.
                </p>
                <div className='read-more-content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus. Curabitur ac pretium ligula. 
                    Etiam finibus tellus eu leo porta, eget malesuada mauris facilisis. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Sed volutpat non nisi ac vestibulum. Aenean vitae neque vitae risus efficitur consectetur quis non ex.
                    Sed quis venenatis nisi. Integer eget dignissim ex, eu efficitur turpis. Ut sit amet eleifend nibh, vitae varius massa. 
                    Integer sagittis, mi ut auctor hendrerit, massa neque sagittis nulla, eget elementum sapien dui vitae nulla.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus. Curabitur ac pretium ligula. 
                    Etiam finibus tellus eu leo porta, eget malesuada mauris facilisis. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Sed volutpat non nisi ac vestibulum. Aenean vitae neque vitae risus efficitur consectetur quis non ex.
                    Sed quis venenatis nisi. Integer eget dignissim ex, eu efficitur turpis. Ut sit amet eleifend nibh, vitae varius massa. 
                    Integer sagittis, mi ut auctor hendrerit, massa neque sagittis nulla, eget elementum sapien dui vitae nulla.
                </p>
                </div>
                <a className='read-more'>Show more</a>
                <a href='resume.pdf' className='btn btn-primary' download={true}><i class="uil uil-import"></i>Download CV</a>
            </div>
        </div>
    </section>

export default About