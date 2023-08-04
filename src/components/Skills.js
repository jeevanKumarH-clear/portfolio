import React from 'react'
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const Skills = () => 
    <section className='skills' id='skills'>
        <h1>Skills</h1>
        <div className='container'>
            <div className='skill'>
                <div className='head'>
                    <div className='left'>
                        <span><CodeSharpIcon/></span>
                        <h4>Front-end development</h4>
                    </div>
                    <span>
                        <KeyboardArrowDownSharpIcon/>
                    </span>
                </div>

                <div className='items'>
                    <div className='item'>
                        <h5>HTML</h5>
                        <div className='progress-area'>
                            <div className='progress-bar'>
                                <div className='progress'></div>
                            </div>
                            <h5>95%</h5>
                        </div>
                    </div>

                    <div className='item'>
                        <h5>CSS</h5>
                        <div className='progress-area'>
                            <div className='progress-bar'>
                                <div className='progress'></div>
                            </div>
                            <h5>90%</h5>
                        </div>
                    </div>

                    <div className='item'>
                        <h5>Javascript</h5>
                        <div className='progress-area'>
                            <div className='progress-bar'>
                                <div className='progress'></div>
                            </div>
                            <h5>90%</h5>
                        </div>
                    </div>

                    <div className='item'>
                        <h5>React Js</h5>
                        <div className='progress-area'>
                            <div className='progress-bar'>
                                <div className='progress'></div>
                            </div>
                            <h5>90%</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill'>
                <div className='head'>
                    <div className='left'>
                        <span><CodeSharpIcon/></span>
                        <h4>Version Control</h4>
                    </div>
                    <span>
                        <KeyboardArrowDownSharpIcon/>
                    </span>
                </div>

                <div className='items'>
                    <div className='item'>
                        <h5>GIT</h5>
                        <div className='progress-area'>
                            <div className='progress-bar'>
                                <div className='progress'></div>
                            </div>
                            <h5>95%</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
export default Skills