/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom"

class Header extends React.Component {
    render() {
        return (
            <header>
                <sidebar>
                    <div class="topnav">
                        <img src={process.env.PUBLIC_URL + "/images/Atekulla_Basmulla Avatar.png"} width="45" height="45" alt="Avatar" />
                        &nbsp;
                        <a><NavLink to="/Home" exact activeClassName="active">Home</NavLink></a>
                        &nbsp;
                        <a><NavLink to="/About" activeClassName="active">About</NavLink></a>
                        &nbsp;
                        <a><NavLink to="/SWK" activeClassName="active">S W K</NavLink></a>
                        &nbsp;
                        <div class="searchbox">
                            <form>
                                <input id="searchbar" onkeyup="search_text()" type="text" placeholder=" Search...." name="search" />
                            </form>
                        </div>
                        <script scr="Main.js"></script>
                    </div>
                </sidebar>
                <br />
            </header>
        );
    }
}

export default Header;