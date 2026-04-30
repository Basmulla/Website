/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className="site-header">
                <div className="header-container">
                    <div className="header-brand">
                        <img
                            src={process.env.PUBLIC_URL + "/images/Atekulla_Basmulla Avatar.png"}
                            alt="Basmulla Avatar"
                            className="header-avatar"
                        />
                        <span className="header-title">Basmulla's Portfolio</span>
                    </div>

                    <nav className="header-nav">
                        <NavLink to="/Home" exact activeClassName="active">
                            Home
                        </NavLink>

                        <NavLink to="/About" activeClassName="active">
                            About
                        </NavLink>

                        <NavLink to="/Skills" activeClassName="active">
                            Skills
                        </NavLink>

                        <NavLink to="/Projects" activeClassName="active">
                            Projects
                        </NavLink>

                        <NavLink to="/Contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;