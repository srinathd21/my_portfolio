import React from 'react'
import Pic1 from './../assets/pic1.svg'
import profilePic from './../assets/profilepic.png'
import html from './../assets/skills/html.png'
import css from './../assets/skills/css.png'
import bootstrap from './../assets/skills/bootstrap.png'
import js from './../assets/skills/js.png'
import react from './../assets/skills/react.png'
import python from './../assets/skills/python.png'
import php from './../assets/skills/php.png'
import flask from './../assets/skills/flask.png'
import django from './../assets/skills/django.png'
import mysql from './../assets/skills/mysql.png'
import git from './../assets/skills/git.png'
import arka from './../assets/projects/arka.png'
import resume from './../assets/projects/resume.png'
import doctor from './../assets/projects/doctor.png'
import myresume from './../assets/resume.pdf'
import { Projects } from './Projects'

export const Home = () => {
    var projects = [
        {
            title: 'Course and Company Website',
            img: arka,
            tools: ['Html', 'CSS', 'Js', 'Bootstrap', 'PHP', 'MySql'],
            desc: 'Developed a comprehensive website for Arka Technologies, aimed at serving both company purposes and technical training courses.',
            link: 'https://arka.org.in/course.php',
            github: 'https://github.com/srinathd21/Arka_host',
        },
        {
            title: 'Resume Builder',
            img: resume,
            tools: ['Html', 'CSS', 'Js', 'Bootstrap'],
            link: 'https://arka.org.in/resume.php',
            github: 'https://github.com/srinathd21/Resume-Builder',
            desc: 'Created a Resume Builder tool with HTML, CSS, and JavaScript that generates customized resumes based on user inputs and allows downloading as a PDF.'
        },
        {
            title: 'Doctor Appointment Booking',
            img: doctor,
            tools: ['Html', 'CSS', 'Js', 'Bootstrap', 'python', 'django', 'sqlite3',],
            github: 'https://github.com/srinathd21/doc_appointment/tree/main/hospital_app',
            desc: 'Developed a web-based application for booking doctor appointments, incorporating an admin panel for managing appointments, doctors, and patients.'
        },
    ]

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
                            Passionate full-stack developer with expertise in building user-friendly web applications using modern front-end and back-end technologies. Let’s create something amazing together!                    </p>
                        <div className="profile-btn">
                            <a href={myresume} download='srinath_resume.pdf' className="btn-cv">
                                Download CV
                            </a>
                            <a href="mailto:srinathdevan12@gmail.com" className="btn-talk">
                                Let's Talk
                            </a>
                        </div>
                        <div className="profile-links">
                            <a href="https://www.linkedin.com/in/srinath-d-b24451278/" target='_blank' className="profile-link"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/srinathd21" target='_blank' className="profile-link"><i class="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/srinath_ds3?igsh=MTE5eWJiNGEyd3Viaw==" target='_blank' className="profile-link"><i class="fa-brands fa-instagram"></i></a>
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

            <div className="aboutme mt-4" id='about'>
                <h1 className='text-center ct-title'>About me</h1>

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

                        <p className='aboutme-text'>
                            I am a skilled and results-oriented full-stack web developer with expertise in crafting efficient and scalable web applications. My technical proficiency includes front-end technologies like HTML, CSS, JavaScript, React.js, Bootstrap, and jQuery, as well as backend development using PHP, Python, Django, and MySQL.

                            With a strong foundation in both development and technical training, I excel in solving complex backend challenges, optimizing database performance, and creating seamless user experiences. My ability to adapt to new technologies and deliver innovative solutions allows me to consistently contribute to impactful projects.

                            I am committed to continuous learning and leveraging my skills to build cutting-edge applications that drive value for businesses and users alike.

                        </p>

                        <a href="tel:+916383706866">Contact Me</a>

                    </div>


                </div>
            </div>

            <hr />

            <div className="experience" id='experience'>
                <h1 className='text-center ct-title'>Experience</h1>

                <div className="experience-box">
                    <h3>Developer and Technical Trainer(Full-time)</h3>
                    <span>23<sup>rd</sup> December 2023 - 13<sup>th</sup>January 2025</span>
                    <h5>Apollo Computer Education</h5>
                    <p className="experiance-desc">
                        I worked as a Developer and Technical Trainer at Apollo Computer Education, where I was responsible for both software development and mentoring students. My role involved designing and delivering courses, providing hands-on training, and ensuring practical learning experiences. In addition to teaching, I actively contributed to project development, focusing on backend logic, database management, and application optimization. I collaborated with teams to plan, develop, and troubleshoot web applications, ensuring efficiency and scalability. Additionally, I was involved in technical problem-solving, course content development, and research on new technologies to enhance both my skills and the learning experience for students. I am passionate about continuous learning and staying updated with the latest industry trends to improve my expertise and contribute effectively to development projects.
                    </p>
                </div>
            </div>

            <hr />

            <div className="skills">
                <div>
                    <h1 className='text-center ct-title'>Skills</h1>
                </div>
                <div className='skill-img'>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={bootstrap} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={python} alt="" />
                    <img src={php} alt="" />
                    <img src={flask} alt="" />
                    <img src={django} alt="" />
                    <img src={mysql} alt="" />
                    <img src={git} alt="" />
                </div>

            </div>

            <hr />

            <div className="projects" id='projects'>
                <h1 className='text-center ct-title'>Projects</h1>
                <Projects projects={projects} />
            </div>
        </div>
    )
}
