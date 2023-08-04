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
                    <p>Worked in a team of 3 and recreated youtube with shorts feature.</p>
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
                    <p>Created a simple and neat looking to-do list app where the user can create, read, delete and update to-dos. And also the user can select task from the task pane available on the right side.</p>
                        <div className='action'>
                            <a href='https://github.com/jeevanKumarH-clear/Todo'>Github</a>
                        </div>
                </div>
            </div>
            </div>
        </div>
    </section>


export default Portfolio