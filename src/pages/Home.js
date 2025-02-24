/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line 
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <main>
                <nav>
                    <h2><strong><u>Basmulla's Portfolio</u></strong></h2>
                </nav>
                <nav>
                    <h3><u>Achievements, Project and Work history</u></h3>
                </nav>
                <p class="secondary"> This website is created to showcase the work created by Basmulla Atekulla. This will include
                    Projects, Work History and loads of fun content created.</p>
                <p id="special"> Here is a link to a Google sites which showcases other skills and projects I worked on. <a href="https://sites.google.com/d/1y0TNT5q55bQJhtzRi7swEjLJRahs3Dtt/p/1dDrQ3IHppHEmJkaGqK-
                Opi9VXhzNjFw5/edit">Work Portfolio</a></p>
                <img align="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0mtWI-1ILiCYhUfCaO_hIa-3YEXbXgsQHQ&s" alt="FarmBoy" width="250" height="150" />
                <h3><u>Work History</u></h3>
                <h3><u>Worked as ...</u></h3>
                <ul>
                    <li> Customer Service Representative - Farm Boy Inc </li>
                    &nbsp;
                    <li> Cashier - Loblaws Inc </li>
                    &nbsp;
                    <li> Junior Web Developer - NorthP&D</li>
                </ul>
                <img align="right" src={process.env.PUBLIC_URL + "/images/NorthP&D"} alt="North P&D" width="250" height="150" />
                <h3><u>Coding Projects</u></h3>
                <h4><u>JavaScript & ReactJS</u></h4>
                <p><u>Here are some mobile apps I created using JavaScript and ReactJS.</u></p>
                <img align="right" src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" alt="ReactJS logo" width="200" height="150" />
                <ol>
                    <li>Calculator App: I created a Calculator app using HTML, CSS, and JavaScript. It has many functions
                        such as the Multiplication, Division, Addition, Sqaure Root and more. It does not have the functions of
                        a scientific calculator. Here is the link to the app.
                        <a href="https://basmulla.github.io/calculate-app/"> Calculator App</a></li>
                    &nbsp;
                    <li>Todo-List App: I created a todo-list app where you can add tasks to remind of events that will occur in the
                        near
                        future. You can also delete them or double click on them to turn them green when completed. I used HTML,
                        CSS, JavaScript and ReactJS to make the app. <a href="https://basmulla.github.io/todo-list/"> Todo-List App</a>
                    </li>
                    &nbsp;
                    <li>Book-Directory Website: I created a book directory website where you can update or delete a list of books that I have stored
                        in an api. I fetch that api using HTTP verbs from the website and created functions to update the title, page count, description
                        of the book, aswell as another function to delete the book. I used ReactJS, node.JS and CSS to build the book directory website.
                        <a href="https://basmulla.github.io/book-directory-client/"> Book Directory API Website</a>
                    </li>
                </ol>
                <img align="right" src={process.env.PUBLIC_URL + "/images/Python.png"} alt="Python logo" width="250" height="200" />
                <h4><u>Python:</u></h4>
                <p><u>Here are some Python Coding Projects I worked on my free time.</u></p>
                <ol>
                    <li> SolveIt: A Math Program that solves Addition, Subtraction, Multiplication, Division
                        and Exponents problems.
                        <a href="https://replit.com/@BasmullaAtekull/Review-Practice#main.py"> SolveIt</a></li> &nbsp;
                    <li> Prime Numbers: A Program that figures out whether a number is a composite or prime number.
                        <a href="https://replit.com/@BasmullaAtekull/Prime-Numbers#main.py"> Prime Numbers</a>
                    </li> &nbsp;
                    <li> Average-Ator: A program that helps find the average of any set of numbers that you input.
                        <a href="https://replit.com/@BasmullaAtekull/For-Loops-Assignment#main.py"> Average-Ator</a>
                    </li>
                </ol>
                &nbsp;
                <h3><u><strong>Here are some cool GitHub statistics of my account.</strong></u></h3>
                &nbsp;
                <img align="right" src="https://github-readme-streak-stats.herokuapp.com?user=Basmulla"
                    alt="GitHub Streak" data-canonical-src="https://git.io/streak-stats" style={{ width: '50%;' }} />
                <img src="https://github-readme-stats.vercel.app/api?username=Basmulla" alt="My GitHub stats"
                    data-canonical-src="https://git.io/streak-stats" style={{ width: '50%;' }} />
                <p>Thank you for reading this quick overview on my work history, achievements
                    and projects I have created.</p>
                <div class="row" />
                <h3><u>Contact Information</u></h3>
                <h3><u> Social Media Accounts</u></h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <ol />
                <li>Instagram &nbsp; <a href="https://www.instagram.com/basmulla_7/" alt-="Instagram" class="fa fa-instagram"></a></li>
                &nbsp;
                <li>Facebook &nbsp; <a href="https://www.facebook.com/bismullah.atekulla/" alt="Facebook" class="fa fa-facebook"></a></li>
                &nbsp;
                <li>Twitter &nbsp; <a href="https://x.com/Basmulla7" alt="Twitter" class="fa fa-twitter"></a></li>
                <ol />
                <div />
                <h3><u>Email Information</u></h3>
                <ol />
                <li>Personal Email: basmulla1087@gmail.com</li>
                &nbsp;
                <li>Work Email: basmulla1087@gmail.com</li>
                <ol />
                <div class="col"> Author: Basmulla Atekulla </div>
                <br />
                <div class="col">Updated on February 2025 </div>
                &nbsp;
            </main>
        );
    }
}

export default Home;