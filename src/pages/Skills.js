/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Skills extends React.Component {
    render() {
        return (
            <main className="skills-page">
                <section className="skills-hero">
                    <p className="section-label">Skills & Technologies</p>
                    <h1>My Technical Toolkit</h1>
                    <h2>Languages, frameworks, tools, and concepts I use to build software projects.</h2>

                    <p>
                        This page highlights the technologies I have worked with through coursework,
                        personal projects, and software development experience. My main interests are
                        full-stack development, backend systems, databases, REST APIs, and software
                        architecture.
                    </p>
                </section>

                <section className="skills-overview-grid">
                    <div className="skill-category-card">
                        <h3>Programming Languages</h3>
                        <p>
                            Languages I have used for software development, coursework, algorithms,
                            operating systems, and project-based applications.
                        </p>

                        <div className="skill-tags">
                            <span>Java</span>
                            <span>C</span>
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>SQL</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3>Frontend Development</h3>
                        <p>
                            Tools and technologies I use to build responsive, interactive, and clean
                            user-facing web applications.
                        </p>

                        <div className="skill-tags">
                            <span>React</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3>Backend Development</h3>
                        <p>
                            Technologies I have used to build server-side logic, APIs, authentication
                            flows, and application features.
                        </p>

                        <div className="skill-tags">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Java Servlets</span>
                            <span>REST APIs</span>
                            <span>API Integration</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3>Databases</h3>
                        <p>
                            Database skills I have developed through academic projects and full-stack
                            applications.
                        </p>

                        <div className="skill-tags">
                            <span>SQL</span>
                            <span>Oracle SQL</span>
                            <span>Relational Databases</span>
                            <span>ER/EER Modelling</span>
                            <span>Schema Design</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3>Tools & Platforms</h3>
                        <p>
                            Development tools and platforms I use for coding, version control,
                            deployment, and project workflow.
                        </p>

                        <div className="skill-tags">
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>VS Code</span>
                            <span>AWS</span>
                            <span>Heroku</span>
                            <span>Firebase</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3>Software Concepts</h3>
                        <p>
                            Core engineering concepts I have learned through coursework and applied
                            in technical projects.
                        </p>

                        <div className="skill-tags">
                            <span>OOP</span>
                            <span>Microservices</span>
                            <span>Software Architecture</span>
                            <span>Data Structures</span>
                            <span>Algorithms</span>
                            <span>Operating Systems</span>
                        </div>
                    </div>
                </section>

                <section className="skills-projects-section">
                    <h3>How I Have Used These Skills</h3>

                    <div className="skills-project-card">
                        <h4>Full-Stack Online Banking System</h4>
                        <p>
                            Used Java, Servlets, SQL, REST APIs, authentication logic, database schema
                            design, and microservice-style architecture to build a multi-role banking
                            application with customers, managers, and administrators.
                        </p>
                    </div>

                    <div className="skills-project-card">
                        <h4>Book Directory API + Client Website</h4>
                        <p>
                            Built a React client that connects to a backend API to view, update, and
                            delete book records. This project helped me practise CRUD operations,
                            frontend/backend communication, and API integration.
                        </p>
                    </div>

                    <div className="skills-project-card">
                        <h4>E-Commerce Relational Database System</h4>
                        <p>
                            Designed an e-commerce database using ER/EER modelling, relational schema
                            design, normalization, and SQL queries to represent products, customers,
                            orders, and relationships.
                        </p>
                    </div>
                </section>

                <section className="skills-learning-section">
                    <h3>Currently Improving</h3>

                    <p>
                        I am continuing to improve my skills in backend development, cloud deployment,
                        full-stack application design, and production-level software practices. I am
                        also preparing for co-op and internship roles by strengthening my resume,
                        portfolio, GitHub projects, and technical interview skills.
                    </p>
                </section>

                <footer className="skills-footer">
                    <p>Author: Basmulla Atekulla</p>
                    <p>Updated: April 2026</p>
                </footer>
            </main>
        );
    }
}

export default Skills;