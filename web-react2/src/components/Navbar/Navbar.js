import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle> Home </NavLink>
                    <NavLink to="/projects" activeStyle> Projects </NavLink>
                    <NavLink to="/about" activeStyle> About </NavLink>
                    <NavLink to="/contact" activeStyle> Contact Me </NavLink>
                    <NavLink to="/linkedin" activeStyle> LinkedIn </NavLink>
                    <NavLink to="/github" activeStyle> GitHub </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;