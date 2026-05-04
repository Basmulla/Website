/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <main className="home-page">
                <section className="hero-section"><div className="hero-content">
                    <h1>Basmulla Atekulla</h1>
                    <h2>Computer Engineering Student | Software Engineering Focus | Co-op Candidate</h2>
                </div>
                    <p className="secondary">
                        Welcome to my portfolio. I am a third-year Computer Engineering student at
                        Toronto Metropolitan University, specializing in Software Engineering and actively
                        building my skills in full-stack development, database-driven applications,
                        backend systems, and software architecture.
                    </p>

                    <p>
                        I am currently looking for a software engineering, backend development, data
                        analytics engineering, or full-stack co-op/internship opportunity where I can
                        contribute to real projects, learn from experienced teams, and continue growing
                        as an engineer.
                    </p>

                </section>

                <section className="about-section">
                    <h3>About Me</h3>

                    <p>
                        My academic background has given me experience with software design, algorithms,
                        operating systems, computer architecture, databases, and object-oriented programming.
                        Through my coursework and projects, I have worked with Java, C, JavaScript, SQL,
                        React, REST APIs, and relational database design.
                    </p>

                    <p>
                        I enjoy building applications that connect front-end interfaces with real backend
                        logic and structured data. I am especially interested in backend systems, database
                        applications, API integration, and scalable software design.
                    </p>
                </section>

                <section className="current-section">
                    <h3>What I Am Doing Right Now</h3>

                    <ul>
                        <li>
                            Studying Computer Engineering at Toronto Metropolitan University with a focus
                            on software engineering and practical system design.
                        </li>
                        <li>
                            Participating in the credited co-op program and actively applying for software,
                            data, and engineering internship roles.
                        </li>
                        <li>
                            Continuing to improve my portfolio projects, resume, GitHub, and technical
                            interview preparation.
                        </li>
                        <li>
                            Working at Farm Boy Inc., where I continue to build teamwork, communication,
                            customer service, and leadership skills.
                        </li>
                    </ul>
                </section>

                <section className="work-section">
                    <h3>Work Experience</h3>

                    <div className="experience-card">
                        <h4>Produce Supervisor - Farm Boy Inc.</h4>
                        <p>
                            In my current role at Farm Boy, I support day-to-day store operations,
                            assist customers, maintain product quality, and work closely with team
                            members in a fast-paced environment. This role has helped me strengthen
                            my communication, problem-solving, responsibility, and leadership skills.
                        </p>
                    </div>

                    <div className="experience-card">
                        <h4>Junior Web Developer Intern - North P&amp;D</h4>
                        <p>
                            As a Junior Web Developer Intern, I gained hands-on experience building and
                            maintaining web pages, working with front-end technologies, and learning how
                            real client-facing websites are structured and improved.
                        </p>
                    </div>

                    <div className="experience-card">
                        <h4>Cashier - Loblaws Inc.</h4>
                        <p>
                            My cashier experience helped me develop strong customer service skills,
                            attention to detail, and the ability to stay organized while handling
                            multiple tasks in a busy environment.
                        </p>
                    </div>
                </section>

                <section className="projects-section">
                    <h3>Featured Projects</h3>

                    <div className="project-card">
                        <h4>Full-Stack Online Banking System</h4>
                        <p>
                            A full-stack banking application designed with multiple user roles, including
                            customers, managers, and administrators. The project includes authentication,
                            transaction flows, loan requests, transfer approvals, REST APIs, and relational
                            database logic.
                        </p>
                        <p>
                            <strong>Technologies:</strong> Java, Servlets, SQL, REST APIs, microservices,
                            database design
                        </p>
                    </div>

                    <div className="project-card">
                        <h4>E-Commerce Relational Database System</h4>
                        <p>
                            A database design project focused on modelling an e-commerce system using
                            ER/EER diagrams, normalized relational schemas, and SQL queries. This project
                            strengthened my understanding of database structure, relationships, and query
                            design.
                        </p>
                        <p>
                            <strong>Technologies:</strong> SQL, Oracle SQL, ER/EER modelling, relational
                            schema design
                        </p>
                    </div>

                    <div className="project-card">
                        <h4>Book Directory API + Client Website</h4>
                        <p>
                            A web application that connects a client-side React interface to a backend API.
                            Users can view, update, and delete book records through API requests, helping
                            me better understand CRUD operations and API integration.
                        </p>
                        <p>
                            <strong>Technologies:</strong> React, Node.js, REST APIs, JavaScript, CSS
                        </p>
                        <p>
                            <a href="https://basmulla.github.io/book-directory-client/">
                                View Book Directory Project
                            </a>
                        </p>
                    </div>

                    <div className="project-card">
                        <h4>Calculator App</h4>
                        <p>
                            A calculator application built using HTML, CSS, and JavaScript. It supports
                            common arithmetic operations and helped me practise DOM manipulation and
                            front-end logic.
                        </p>
                        <p>
                            <a href="https://basmulla.github.io/calculate-app/">View Calculator App</a>
                        </p>
                    </div>

                    <div className="project-card">
                        <h4>Todo List App</h4>
                        <p>
                            A task management app where users can add, complete, and delete tasks. This
                            project helped me practise component-based development and interactive UI
                            behaviour.
                        </p>
                        <p>
                            <a href="https://basmulla.github.io/todo-list/">View Todo List App</a>
                        </p>
                    </div>
                </section>

                <section className="skills-section">
                    <h3>Technical Skills</h3>

                    <ul>
                        <li><strong>Languages:</strong> Java, C, Python, JavaScript, SQL</li>
                        <li><strong>Frontend:</strong> React, HTML, CSS, Tailwind CSS</li>
                        <li><strong>Backend:</strong> Node.js, Express.js, Java Servlets, REST APIs</li>
                        <li><strong>Databases:</strong> Oracle SQL, relational schema design</li>
                        <li><strong>Tools:</strong> Git, GitHub, AWS, Heroku, VS Code</li>
                        <li><strong>Concepts:</strong> OOP, API integration, data pipelines, microservices, software architecture</li>
                    </ul>
                </section>

                <section className="goals-section">
                    <h3>What I Am Looking For</h3>

                    <p>
                        I am currently seeking a co-op or internship opportunity where I can apply my
                        software engineering skills in a professional environment. I am especially
                        interested in roles involving backend development, full-stack development,
                        software engineering, data engineering, or database-driven applications.
                    </p>

                    <p>
                        My goal is to contribute to meaningful technical work, improve my engineering
                        skills, and gain experience working with real development teams, production
                        systems, and industry-level software practices.
                    </p>
                </section>

                <section className="github-section">
                    <h3>GitHub Activity</h3>

                    <p>
                        I use GitHub to manage my software projects, track my progress, and showcase
                        my work in web development, backend systems, databases, and full-stack applications.
                    </p>

                    <div className="github-activity-card">
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com?user=Basmulla"
                            alt="GitHub contribution streak showing total contributions, current streak, and longest streak"
                        />
                    </div>

                    <div className="github-card-grid">
                        <a
                            href="https://github.com/Basmulla"
                            target="_blank"
                            rel="noreferrer"
                            className="github-card"
                        >
                            <h4>View My GitHub</h4>
                            <p>Explore my repositories, project code, and development work.</p>
                        </a>

                        <a
                            href="https://github.com/Basmulla/Website"
                            target="_blank"
                            rel="noreferrer"
                            className="github-card"
                        >
                            <h4>Portfolio Repository</h4>
                            <p>View the source code for this React portfolio website.</p>
                        </a>
                    </div>
                </section>

                <section className="contact-section">
                    <h3>Contact Information</h3>

                    <ul>
                        <li>Email: basmulla1087@gmail.com</li>
                        <li>
                            GitHub: <a href="https://github.com/Basmulla">GitHub</a>
                        </li>
                        <li>
                            LinkedIn: <a href="https://linkedin.com/in/basmulla-atekulla>">LinkedIn</a>
                        </li>
                    </ul>
                </section>

                <footer>
                    <p>Author: Basmulla Atekulla</p>
                    <p>Updated: April 2026</p>
                </footer>
            </main>
        );
    }
}

export default Home;