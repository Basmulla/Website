import React, { Component } from "react";
import { firestore } from "../components/firebase";

class Contact extends Component {
    render() {
        return (
            <main className="contact-page">
                <section className="contact-hero">
                    <p className="section-label">Contact</p>
                    <h1>Let’s Connect</h1>
                    <h2>
                        I am currently looking for co-op, internship, and software engineering opportunities.
                    </h2>

                    <p>
                        Feel free to reach out if you are a recruiter, hiring manager, developer,
                        or someone interested in my projects. I am especially interested in
                        software engineering, backend development, full-stack development,
                        data analytics engineering, and database-focused roles.
                    </p>
                </section>

                <section className="contact-content">
                    <div className="contact-info-card">
                        <h3>Contact Information</h3>

                        <p>
                            I am a Computer Engineering student at Toronto Metropolitan University,
                            specializing in Software Engineering and actively seeking co-op and
                            internship opportunities.
                        </p>

                        <div className="contact-info-list">
                            <div>
                                <strong>Email</strong>
                                <p>
                                    <a href="mailto:basmulla1087@gmail.com">
                                        basmulla1087@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <strong>Phone</strong>
                                <p>
                                    <a href="tel:6476485717">
                                        647-648-5717
                                    </a>
                                </p>
                            </div>

                            <div>
                                <strong>GitHub</strong>
                                <p>
                                    <a
                                        href="https://github.com/Basmulla"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        github.com/Basmulla
                                    </a>
                                </p>
                            </div>

                            <div>
                                <strong>LinkedIn</strong>
                                <p>
                                    <a href="https://linkedin.com/in/basmulla-atekulla" target="_blank" rel="noreferrer">
                                        https://linkedin.com/in/basmulla-atekulla
                                    </a>
                                </p>
                            </div>

                            <div>
                                <strong>Location</strong>
                                <p>Toronto, Ontario, Canada</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h3>Send Me a Message</h3>

                        <form name="contact" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    name="emailAddress"
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="Enter a subject"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message here"
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>

                <section className="contact-extra-card">
                    <h3>What I Am Open To</h3>

                    <div className="contact-tags">
                        <span>Software Engineering Co-op</span>
                        <span>Backend Development</span>
                        <span>Full-Stack Development</span>
                        <span>Data Analytics Engineering</span>
                        <span>Database Applications</span>
                        <span>Web Development</span>
                    </div>
                </section>

                <footer className="contact-footer">
                    <p>Author: Basmulla Atekulla</p>
                    <p>Updated: April 2026</p>
                </footer>
            </main>
        );
    }
}

async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const emailAddress = form.emailAddress.value;
    const subject = form.subject.value;
    const message = form.message.value;

    try {
        const contactMessage = await firestore.collection("contactMessages").add({
            fullName,
            emailAddress,
            subject,
            message,
            createdAt: new Date()
        });

        alert(`Thank you for reaching out! Your message was sent successfully.`);
        console.log("Contact message added with ID:", contactMessage.id);

        form.reset();
    } catch (error) {
        console.error("Error sending message:", error);
        alert("Sorry, something went wrong. Please try again or email me directly.");
    }
}

export default Contact;