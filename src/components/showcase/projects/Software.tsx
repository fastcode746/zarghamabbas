import React from 'react';
// @ts-ignore
import ResumeDownload from '../ResumeDownload';


export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Habit Builder App in Flutter</h2>
                <br />
                <p>
                    I developed a comprehensive habit tracking application using Flutter
                    that helps users build and maintain positive habits. The app features
                    daily habit tracking, progress visualization, streak counting, and
                    customizable reminders. I implemented a clean architecture pattern
                    with BLoC for state management, and used SQLite for local data
                    persistence. The UI was designed with Material Design principles
                    while adding custom animations to create an engaging user experience.
                    This project helped me gain deep insights into mobile development
                    and Flutter's capabilities for creating cross-platform applications.
                </p>
                <br />
                
               
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/fastcode746/Habit-Builder-App-In-Flutter"
                        >
                            <p>
                                <b>[Github]</b> - Habit Builder App
                            </p>
                        </a>
                    </li>
                   

                </ul>
                
            </div>
            <div className="text-block">
                <h2>Elux Ecommerce App</h2>
                <br />
                <p>
                    I developed a feature-rich ecommerce application using Flutter
                    that enables users to browse and purchase electronics products.
                    The app includes essential features like product catalog browsing,
                    shopping cart management, secure checkout process, and order tracking.
                    I implemented clean architecture principles with GetX for state
                    management and used Firebase for backend services including
                    authentication and real-time database. The UI was crafted with
                    Material Design 3 guidelines while incorporating smooth animations
                    for an enhanced shopping experience.
                </p>
                <br />
                
                <p>
                    One of the key technical challenges I tackled in this project was implementing 
                    a robust state management system using GetX. This involved carefully structuring 
                    the application's data flow and ensuring seamless updates across different screens 
                    and components. I also implemented complex features like real-time product filtering, 
                    advanced search functionality, and a sophisticated shopping cart system that handles 
                    product variants and quantity updates efficiently. The integration with Firebase 
                    required careful consideration of offline capabilities and data synchronization. 
                    I'm particularly proud of the optimized image loading system I developed that 
                    provides a smooth browsing experience even with large product catalogs. The project 
                    was an excellent opportunity to apply clean architecture principles while delivering 
                    a polished, production-ready e-commerce solution.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/fastcode746/Elux-An-Ecommerce-App-Template--Flutter"
                        >
                            <p>
                                <b>[Elux]</b> - Ecommerce App in Flutter
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>DesignPrint NYC</h2>
                <br />
                <p>
                    As a Full Stack Developer at Direct2Success Ltd, I worked on a production-grade 
                    SAAS E-Commerce application. My responsibilities included developing key modules 
                    such as SEO optimization, implementing complex pricing formula systems, enhancing 
                    authentication mechanisms, and creating customizable email templates. I focused on 
                    API optimization to improve performance and response times. Additionally, I conducted 
                    thorough testing of software solutions and maintained comprehensive system documentation 
                    to ensure smooth operation and future maintainability of the platform.
                </p>
                <br />
                
                <p>
                    I developed this project using a modern tech stack including React, Node.js, 
                    and MongoDB. The platform features a user-friendly interface for customers to 
                    design and order custom printed products. Key features include real-time design 
                    previews, automated pricing calculations, and integration with various payment 
                    gateways. The system also includes a robust admin dashboard for order management 
                    and inventory tracking. I implemented responsive design principles to ensure a 
                    seamless experience across all devices.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://designprintnyc.com/"
                        >
                            <p>
                                <b>[Website]</b> - DesignPrint NYC
                            </p>
                        </a>
                    </li>
                    
                </ul>
            
            </div>
            <ResumeDownload />
        </div>
    );
};


export default SoftwareProjects;
