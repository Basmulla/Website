/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class About extends React.Component {
    render() {
        return (  
            <main>
                <nav>
                    <h2><strong><u>Basmulla's Portfolio</u></strong></h2>
                </nav>
                <h3><u> Personal and Work Information</u></h3> <img align="right"
                    src="https://upload.wikimedia.org/wikipedia/en/d/dc/MGCI_Emblem2.png" alt="MGCI Logo" width="150" height="150" />
                <h3><u>School Information</u></h3>

                <ul>
                    <li> Am currently attending Marc Garneau Collegiate Institute </li>
                    <li> Started in Sept 2019 and will graduate in June 2023 </li>
                    <li> In Grade 11 </li>
                    <li> Notable Achievements: </li>
                    <ul>
                        <li> Achieved a 100% average in Grade 10 Computer Engineering </li>
                        <li> Achieved a 93% average in Grade 10 </li>
                    </ul>

                </ul>

                <h3><u>Personal Life</u></h3>
                <ul>
                    <li> Was born in Almaty, Kazakhstan </li>
                    <li> Grew up in Toronto, Ontario for the majority of my life time </li>
                    <li> Dreams: </li>
                    <ul>
                        <li> Want to go in the fields of Software Engineering</li>
                        <li> Learn Advanced Web Development</li>
                        <li> Want to go to University of Waterloo and complete my post-secondary years there</li>
                        <li> Become a successful Web Developer and create new innovative inventions
                            that will society will benefit from. </li>
                    </ul>
                </ul>

                <h3><u>Background:</u></h3>

                <ul>
                    <li> My background is Afghan.</li>

                    <li> Even though I was born in Kazakhstan, both my parents were born and raised in Afghanistan. </li>

                    <li> I can speak two languages fluently. </li>

                    <ul>
                        <li> English </li>
                        <li> Farsi/Dari </li>
                    </ul>

                </ul>

                <p>Thank you for reading this quick overview talking about my personal life and background.</p>
                <div class="row">
                    <div class="col"> Author: Basmulla Atekulla </div>
                    &nbsp;
                    <div class="col">Created on Febraury 2022 </div>
                    &nbsp;
                </div>
            </main>
        );
    }
}

export default About;