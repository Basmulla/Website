/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class About extends React.Component {
    render() {
        return (
            <main className="about-page">
                <section className="about-hero">
                    <div>
                        <p className="section-label">About Me</p>
                        <h1>Hi, I’m Basmulla Atekulla.</h1>
                        <h2>Computer Engineering Student | Software Engineering Focus | Co-op Candidate</h2>

                        <p>
                            I am a Computer Engineering student at Toronto Metropolitan University,
                            specializing in Software Engineering and currently building my experience
                            in full-stack development, backend systems, databases, and software design.
                        </p>

                        <p>
                            I enjoy solving technical problems, learning how systems work behind the scenes,
                            and building applications that connect clean user interfaces with practical
                            backend logic.
                        </p>
                    </div>

                    <div className="about-profile-card">
                        <img
                            src={process.env.PUBLIC_URL + "/images/profile-photo.jpeg"}
                            alt="Basmulla Atekulla"
                            className="about-avatar"
                        />
                        <h3>Basmulla Atekulla</h3>
                        <p>Toronto, Ontario</p>
                        <p>Computer Engineering Student</p>
                    </div>
                </section>

                <section className="about-grid">
                    <div className="about-card">
                        <h3>Education</h3>
                        <p>
                            I am currently studying Computer Engineering at Toronto Metropolitan University.
                            My degree has helped me develop a strong foundation in programming, algorithms,
                            operating systems, databases, computer architecture, and software design.
                        </p>

                        <ul>
                            <li>Toronto Metropolitan University</li>
                            <li>Computer Engineering</li>
                            <li>Software Engineering focus</li>
                            <li>Expected graduation: 2028</li>
                        </ul>
                    </div>

                    <div className="about-card">
                        <h3>Technical Interests</h3>
                        <p>
                            I am especially interested in software systems that combine backend development,
                            databases, APIs, and user-facing applications. I like projects where I can
                            understand the full flow from data storage to user interaction.
                        </p>

                        <ul>
                            <li>Full-stack web development</li>
                            <li>Backend systems and REST APIs</li>
                            <li>Database-driven applications</li>
                            <li>Software architecture and microservices</li>
                        </ul>
                    </div>

                    <div className="about-card">
                        <h3>Work Experience</h3>
                        <p>
                            Outside of school, I have gained professional experience in both customer-facing
                            and technical environments. My current work at Farm Boy has strengthened my
                            communication, responsibility, teamwork, and leadership skills.
                        </p>

                        <p>
                            I also previously worked as a Junior Web Developer Intern at North P&amp;D,
                            where I gained early experience with web development and client-facing websites.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Projects I Have Worked On</h3>
                        <p>
                            My projects have helped me apply what I learn in class to real applications.
                            I have worked on systems involving authentication, database schemas, REST APIs,
                            React interfaces, and CRUD operations.
                        </p>

                        <ul>
                            <li>Full-Stack Online Banking System</li>
                            <li>E-Commerce Relational Database System</li>
                            <li>Book Directory API and Client Website</li>
                            <li>React Calculator and Todo List Apps</li>
                        </ul>
                    </div>
                </section>

                <section className="about-card about-wide-card">
                    <h3>My Background</h3>

                    <p>
                        I grew up in Toronto, Ontario, and my background has shaped the way I approach
                        learning, work, and problem-solving. I value persistence, adaptability, and
                        continuous improvement, especially when working through challenging technical
                        problems.
                    </p>

                    <p>
                        I am fluent in English and Farsi/Dari, which has helped me communicate with
                        different people and understand the value of clear communication in both academic
                        and professional environments.
                    </p>
                </section>

                <section className="about-card about-wide-card">
                    <h3>What I Am Looking For</h3>

                    <p>
                        I am currently looking for a co-op or internship opportunity where I can contribute
                        to real software projects, learn from experienced developers, and continue growing
                        as an engineer.
                    </p>

                    <p>
                        I am especially interested in software engineering, backend development, full-stack
                        development, data analytics engineering, and database-focused roles.
                    </p>
                </section>

                <section className="about-card about-wide-card">
                    <h3>Personal Goals</h3>

                    <p>
                        My goal is to become a strong software engineer who can build reliable, useful,
                        and scalable applications. I want to continue improving my technical skills while
                        gaining professional experience in real development environments.
                    </p>

                    <p>
                        Long term, I hope to work on meaningful technology that solves real problems and
                        creates value for people, teams, and communities.
                    </p>
                </section>

                <footer className="about-footer">
                    <p>Author: Basmulla Atekulla</p>
                    <p>Updated: April 2026</p>
                </footer>
            </main>
        );
    }
}

export default About;