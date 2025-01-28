import React from 'react'
import Pic1 from './../assets/pic1.svg'
import profilePic from './../assets/profilepic.png'

export const Home = () => {
    return (
        <div className='home container'>
            <div className="row">

                <div className="col-lg-7 profileContent">
                    <div className=''>
                        <h1 className="profile-name">Hi, I'm Srinath</h1>
                        <h5 className="profile-title">
                            a Full Stack Developer
                        </h5>
                        <p className="profile-description">
                            I am a passionate full-stack developer skilled in building robust and user-friendly web applications.
                            With expertise in front-end technologies like HTML, CSS, JavaScript, and Bootstrap, as well as back-end
                            frameworks like Python and Django, I bring creative ideas to life. Let's create something amazing together!
                        </p>
                        <div className="profile-btn">
                            <a href="#" className="btn-cv">
                                Download CV
                            </a>
                            <a href="#" className="btn-talk">
                                Let's Talk
                            </a>
                        </div>
                        <div className="profile-links">
                            <a href="#" className="profile-link"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#" className="profile-link"><i class="fa-brands fa-github"></i></a>
                            <a href="#" className="profile-link"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 Pic1" style={{
                    backgroundImage: `url(${Pic1})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>

                </div>

            </div>

            <hr />

            <div className="aboutme mt-4">
                <h1 className='text-center'>About me</h1>

                <div className="row">

                    <div className="col-lg-5 ">
                    <div className="profilePic" style={{
                        backgroundImage: `url(${profilePic})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    </div>

                    </div>

                    <div className="col-lg-7 aboumeContent">
                        
                            <p  className='aboutme-text'>
                                I am a skilled and results-oriented full-stack web developer with expertise in crafting efficient and scalable web applications. My technical proficiency includes front-end technologies like HTML, CSS, JavaScript, React.js, Bootstrap, and jQuery, as well as backend development using PHP, Python, Django, and MySQL.

                                With a strong foundation in both development and technical training, I excel in solving complex backend challenges, optimizing database performance, and creating seamless user experiences. My ability to adapt to new technologies and deliver innovative solutions allows me to consistently contribute to impactful projects.

                                I am committed to continuous learning and leveraging my skills to build cutting-edge applications that drive value for businesses and users alike.

                            </p>

                            <a href="">Contact Me</a>
                       
                    </div>


                </div>
            </div>

            <hr />

            <div className="projects">
                <h1 className='text-center'>Projects</h1>
            </div>
        </div>
    )
}
