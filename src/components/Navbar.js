import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/overview" activeStyle>
                        Overview
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        Products
                    </NavLink>
                    <NavLink to="/articles" activeStyle>
                        Articles
                    </NavLink>
                    <NavLink to="/partners" activeStyle>
                        Partners
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;