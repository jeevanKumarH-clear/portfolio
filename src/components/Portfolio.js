import React from 'react'

const Portfolio = () => 
    <section className='recent-work' id='portfolio'>
        <div className='container'>
            <h4>My Recent Works</h4>
            <h1>Here are some of my projects</h1>
            <div className='projects'>
                <div className='project'>
                    <div className='thumbnail'>
                        <img src='./youtube.jpg' alt='img'/>
                    </div>
                    <h2>Youtube clone</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus. Curabitur ac pretium ligula. 
                        Etiam finibus tellus eu leo porta, eget malesuada mauris facilisis. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Sed volutpat non nisi ac vestibulum.</p>
                        <div className='action'>
                            <a href='https://github.com/jeevanKumarH-clear/myYouTubeClone'>Github</a>
                        </div>
                </div>

            <div className='projects'>
                <div className='project'>
                    <div className='thumbnail'>
                        <img src='./todo.png' alt='img'/>
                    </div>
                    <h2>Todo app</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis lectus. Curabitur ac pretium ligula. 
                        Etiam finibus tellus eu leo porta, eget malesuada mauris facilisis. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Sed volutpat non nisi ac vestibulum.</p>
                        <div className='action'>
                            <a href='https://github.com/jeevanKumarH-clear/Todo'>Github</a>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </section>


export default Portfolio