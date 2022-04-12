/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class SWK extends React.Component {
    render() {
        return (
            <main style={{
                backgroundColor: '#f1f1f1',
                boxSizing: 'border-box',
                padding: '6px',
                fontFamily: 'Arial',
                margin: 'auto'
            }}>
                <div class="secondary">
                    <nav>
                        <h1 style={{
                            fontSize: '50px',
                            wordBreak: 'break-all'
                        }}><strong><u>Basmulla's Portfolio</u></strong></h1>
                    </nav>
                    <hr />

                    <h2>Software Applications</h2>
                    <p>This tab will showcase the different Languages and SoftWare Applications I use to
                        incorporate in my work</p>

                    <div class="row" style={{
                        content: "",
                        display: 'table',
                        clear: 'both',
                        margin: '8px'
                    }} >
                        <div class="column" style={{
                        }}>
                            <div class="content" style={{
                                backgroundColor: 'white',
                                padding:'8px',
                                float: 'left',
                                width: '25%'
                            }}>
                                <img src={process.env.PUBLIC_URL + "/images/ReactJS.png"} alt="React" style={{ width: "100%" }} />
                                <h3>ReactJS Application</h3>
                                <p>ReactJS is a front-end JavaScript Library used for building userinterfaces
                                    and helps handle the view layer of the web or mobile app. I used ReactJS to
                                    build my todo-list app.
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="content" style={{
                                backgroundColor: 'white',
                                padding:'8px',
                                float: 'left',
                                width: '25%'
                            }}>
                                <img src={process.env.PUBLIC_URL + "/images/JavaScript.jpg"} alt="JavaScript" style={{ width: "100%" }} />
                                <h3>JavaScript</h3>
                                <p>JavaScript is a programming language that is used in mobile and app development.
                                    I used JavaScript in many of my web apps such as the Calculator app and the
                                    todo-list app.
                                </p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="content" style={{
                                backgroundColor: 'white',
                                padding:'8px',
                                float: 'left',
                                width: '25%'
                            }}>
                                <img src={process.env.PUBLIC_URL + "/images/CSS.jpeg"} alt="CSS" style={{ width: "100%" }} />
                                <h3>CSS</h3>
                                <p>CSS is a style sheets programming language that is used for styling and formating
                                    the written documents in the markup languages such as HTML. I used CSS in all of my
                                    web app such as my portfolio, Calculator and more.</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="content"
                                style={{
                                    backgroundColor: 'white',
                                    padding:'8px',
                                    float: 'left',
                                    width: '20%'
                                }}>
                                <img src={process.env.PUBLIC_URL + "/images/HTML.png"} alt="HTML" style={{ width: "100%" }} />
                                <h3>HTML</h3>
                                <p>HTML is a programming language that is used to build and construct web pages and
                                    its content. I used HTML in all of my web apps that I constructed.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="content" style={{
                        backgroundColor: 'white',
                        padding:'8px',
                        float: 'left',
                        width: '100%'
                    }}>
                        <img src={process.env.PUBLIC_URL + "/images/WebDev.jpeg"} alt="Back-end" style={{ width: "100%" }} />
                        <h3>Back-End Programming Languages</h3>
                        <p>These are some back-end programming languages that I want to learn as I believe I have
                            some knowlegde with Front-end Apllications but not with Back-End. Learning Back-end
                            languages would be great because it would help with functionality and logic code powering
                            your working on. It would a great quality to have in this day and age.</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default SWK;