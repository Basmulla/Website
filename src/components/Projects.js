import React from "react";
import "./SearchBar.css";

function Projects() {
    return (
        <main className="projects-page">
            <section className="projects-hero">
                <p className="section-label">Projects</p>
                <h1>Software Projects I Have Built</h1>
                <h2>
                    A collection of full-stack, database, backend, and web development projects
                    that show my technical growth.
                </h2>

                <p>
                    These projects highlight my experience with Java, React, JavaScript, SQL,
                    REST APIs, database design, and software architecture. I enjoy building
                    applications that connect clean user interfaces with practical backend logic
                    and structured data.
                </p>
            </section>

            <section className="featured-projects">
                <h3>Featured Projects</h3>

                <div className="project-grid">
                    <div className="portfolio-project-card">
                        <div className="project-header">
                            <h4>Full-Stack Online Banking System</h4>
                            <span className="project-status">Academic Project</span>
                        </div>

                        <p>
                            A multi-role online banking system with customers, managers, and
                            administrators. The application includes login/authentication,
                            transfer requests, loan requests, approval workflows, REST endpoints,
                            and relational database logic.
                        </p>

                        <div className="project-tags">
                            <span>Java</span>
                            <span>Servlets</span>
                            <span>SQL</span>
                            <span>REST APIs</span>
                            <span>Microservices</span>
                        </div>

                        <ul>
                            <li>Designed role-based workflows for customers, managers, and admins.</li>
                            <li>Built backend endpoints for transfer and loan request logic.</li>
                            <li>Connected application actions to relational database updates.</li>
                        </ul>
                    </div>

                    <div className="portfolio-project-card">
                        <div className="project-header">
                            <h4>Book Directory API + Client Website</h4>
                            <span className="project-status">Web App</span>
                        </div>

                        <p>
                            A React client website connected to a backend API where users can
                            view, update, and delete book records. This project helped me practise
                            CRUD operations, API calls, and frontend/backend integration.
                        </p>

                        <div className="project-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>REST APIs</span>
                            <span>JavaScript</span>
                            <span>CSS</span>
                        </div>

                        <ul>
                            <li>Created a client interface for interacting with book records.</li>
                            <li>Used API requests to update and delete stored data.</li>
                            <li>Practised component-based React development.</li>
                        </ul>

                        <a
                            href="https://basmulla.github.io/book-directory-client/"
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                        >
                            View Project
                        </a>
                    </div>

                    <div className="portfolio-project-card">
                        <div className="project-header">
                            <h4>E-Commerce Relational Database System</h4>
                            <span className="project-status">Database Project</span>
                        </div>

                        <p>
                            A database design project focused on modelling an e-commerce platform
                            using ER/EER diagrams, normalized relational schemas, and SQL queries.
                        </p>

                        <div className="project-tags">
                            <span>SQL</span>
                            <span>Oracle SQL</span>
                            <span>ER/EER</span>
                            <span>Schema Design</span>
                            <span>Normalization</span>
                        </div>

                        <ul>
                            <li>Designed database relationships for customers, products, and orders.</li>
                            <li>Applied normalization to improve structure and reduce redundancy.</li>
                            <li>Wrote SQL queries to retrieve and manage e-commerce data.</li>
                        </ul>
                    </div>

                    <div className="portfolio-project-card">
                        <div className="project-header">
                            <h4>Personal Portfolio Website</h4>
                            <span className="project-status">Current Project</span>
                        </div>

                        <p>
                            A React-based portfolio website built to showcase my education,
                            technical skills, work experience, and software projects for recruiters
                            and co-op applications.
                        </p>

                        <div className="project-tags">
                            <span>React</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Firebase</span>
                            <span>GitHub</span>
                        </div>

                        <ul>
                            <li>Built reusable React pages and components.</li>
                            <li>Improved UI design, spacing, navigation, and recruiter readability.</li>
                            <li>Used the site as a central place to present my technical background.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="early-projects-section">
                <h3>Earlier Projects</h3>

                <div className="early-projects-grid">
                    <div className="early-project-card">
                        <h4>Calculator App</h4>
                        <p>
                            A calculator application built with HTML, CSS, and JavaScript that supports
                            common arithmetic operations.
                        </p>
                        <a
                            href="https://basmulla.github.io/calculate-app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Calculator App
                        </a>
                    </div>

                    <div className="early-project-card">
                        <h4>Todo List App</h4>
                        <p>
                            A task management app where users can add, complete, and delete tasks.
                            This project helped me practise interactive UI behaviour.
                        </p>
                        <a
                            href="https://basmulla.github.io/todo-list/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Todo List App
                        </a>
                    </div>

                    <div className="early-project-card">
                        <h4>Python Practice Projects</h4>
                        <p>
                            Small Python programs including a math solver, prime number checker,
                            and average calculator. These helped build my early programming logic.
                        </p>
                    </div>
                </div>
            </section>

            <section className="projects-focus-section">
                <h3>What These Projects Show</h3>

                <p>
                    My projects show that I am comfortable learning across the full software stack.
                    I have worked with front-end interfaces, backend logic, APIs, database schemas,
                    authentication workflows, and deployment tools.
                </p>

                <p>
                    Going forward, I want to continue building stronger full-stack and backend-focused
                    projects that use clean architecture, reliable data handling, and professional
                    development practices.
                </p>
            </section>

            <footer className="projects-footer">
                <p>Author: Basmulla Atekulla</p>
                <p>Updated: April 2026</p>
            </footer>
        </main>
    );
}

export default Projects;