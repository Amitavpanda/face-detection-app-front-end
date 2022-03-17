import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.styles.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
const Navigation = () => {
    return ( <
        div >
        <
        Navbar className = 'nav shadow-lg p-3 mb-5 rounded'
        collapseOnSelect expand = "lg"
        bg = ""
        variant = "dark" >
        <
        Container >
        <
        Navbar.Brand className = 'nav-head'
        href = "#home" > Smart Brain < /Navbar.Brand> <
        Navbar.Toggle ariacontrols = "responsive-navbar-nav" / >
        <
        Navbar.Collapse id = "responsive-navbar-nav" >
        <
        Nav className = "me-auto" >
        <
        Nav.Link className = 'nav-item'
        href = "/" > Home < /Nav.Link> <
        Nav.Link className = 'nav-item'
        href = "" > About < /Nav.Link> <
        /Nav> <
        Nav >
        <
        Nav.Link className = 'nav-item'
        href = "#deets" > Sign Out < /Nav.Link> {
            /* <Nav.Link eventKey={2} href="">
                        Dank memes
                    </Nav.Link> */
        } <
        /Nav> <
        /Navbar.Collapse> <
        /Container> <
        /Navbar> <
        /div>   
    )
}

export default Navigation;