import React from 'react';
import me from '../../assets/pictures/me.webp';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Zargham Abbas</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Direct2Succes Ltd.! In May
                    of 2025 I graduated from University of Sargodha, Pakistan
                    with my BS in Software Engineering.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:czaaaa20@gmail.com">
                    czaaaa20@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. I love to solve complex problems. From childhood, what 
                    others found difficult, I solved those problems easily This has 
                    been in me for a long time. What I love most about programming is the
                    constant learning and improvement that comes with it.

                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how do website work. I started by learning
                    Flutter and then shifted to MERN Stack development in my internship
                    in summer 2023.
                    I started my development journey by building a Full Stack Notes App. 
                    Take a look at it on 
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/fastcode746/Notes-App-In-Flutter"
                    >
                         <span> Github</span>
                    </a>
                    {''} I have  worked on many projects, including chat bots,
                    Chess Games, apps, and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In summer of 2023, I got seletced in an Internship at Direct2Succes.
                    My role was to work on a project called DesignPrint NYC. It is a printing business
                    SAAS Product. It is a platform that allows customers to order
                    custom prints from their favorite designers. I am currently working on this project
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond Programming, I have a variety of
                            interests and hobbies. I love to read psychology
                            books, and I am always looking for new ways to
                            explore psychology. I love to meet new people
                            and learn about their experiences and perspectives.
                        </p>
                        <br />
                        <p>
                            In University, I was President of Departmental Society. I led the team of
                            50+ people and organized 150+ events in 2 years like Sports Gala, Project Exhibitions, Hackathons, and more.

                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2025
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Want to connect with me? You can find me on Instagram{'\t'}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/zargham_746?igsh=endyMmo2aWplMDE3"
                    >
                       @zargham_746
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:czaaaa20@gmail.com">
czaaaa20@gmail.com                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
