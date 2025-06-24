import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Direct2Success Ltd</h1>
                        <h4>Islamabad, Pakistan</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>MERN Stack Developer (Remote)</h3>
                        <b>
                            <p>April 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    As a Full Stack Developer at Direct2Success Ltd, I work on production-grade SAAS E-Commerce applications
                    utilizing the MERN (MongoDB, Express.js, React, Node.js) stack.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed multiple modules including SEO optimization, pricing formulas, authentication improvements,
                            and email templates.
                        </p>
                    </li>
                    <li>
                        <p>
                            Optimized API performance and response times.
                        </p>
                    </li>
                    <li>
                        <p>
                            Conducted thorough testing of software solutions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created comprehensive system documentation.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>SE Spectrum</h1>
                        <h4>University of Sargodha, Pakistan</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>President & Head of Management</h3>
                        <b>
                            <p>June 2023 - May 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Led the Departmental Society as President and Head of Management and Technical Wing, overseeing
                    operations and coordinating with university leadership.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Successfully managed a team of 50+ members and organized over 150 events.
                        </p>
                    </li>
                    <li>
                        <p>
                            Actively participated in departmental core affairs, helping senior faculty members
                            leverage the department financially.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated with Dean, Director HRDC, Director ORIC, and Vice Chancellor for events.
                        </p>
                    </li>
                    <li>
                        <p>
                            Established connections across 10+ university departments and secured event sponsorships.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FastCode Solutions</h1>
                        <h4>Islamabad, Pakistan</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Flutter App Developer (Remote)</h3>
                        <b>
                            <p>Feb 2022 - Jan 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked as a Flutter Developer creating mobile applications and managing development projects.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and maintained 5+ industry-grade mobile applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            Successfully delivered 10+ Final Year Projects (FYPs) for students.
                        </p>
                    </li>
                    <li>
                        <p>
                            Led and managed a team of 5 developers.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided training and mentorship to 2 junior developers.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelancing</h1>
                        <h4>Development & Outsourcing</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Independent Developer</h3>
                        <b>
                            <p>2022 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Working as an independent developer focusing on Flutter, MERN Stack development,
                    and project outsourcing.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Completed 30+ projects including Flutter apps, MERN Stack applications,
                            and student Final Year Projects.
                        </p>
                    </li>
                    <li>
                        <p>
                            Successfully outsourced and managed 20+ projects through local network.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built strong network with local freelancers and software houses for client acquisition.
                        </p>
                    </li>
                    <li>
                        <p>
                            Mentored university juniors in starting their freelancing careers.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
