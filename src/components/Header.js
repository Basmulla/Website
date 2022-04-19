/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import "./SearchBar";
import Helmet from "react-helmet";

class Header extends React.Component {
    render() {
        return (
            <header>
                <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js">
                </script>
                <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
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
                        <a><NavLink to="/SearchBar" activeClassName="active">Browser</NavLink></a>
                        &nbsp;
                        <a><NavLink to="/SignupForm" activeClassName="active">Sign Up</NavLink></a>
                        &nbsp;
                        <div class="searchbox">
                            <Helmet>
                                <script src="SearchBar.js" type='text/babel'></script>
                            </Helmet>
                        </div>
                    </div>
                </sidebar>
                <br />
            </header>
        );
    }
}

export default Header;