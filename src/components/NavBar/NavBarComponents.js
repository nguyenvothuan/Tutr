import React, { useState } from 'react';
import $ from 'jquery';
// import { FontAwesomeIcon } from '@fortawesome/react-fortawesome';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
export const NavBarReactStrap = () => {
    const [isOpen, setIsOpen] = useState(false);
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.site-navigation,.trans-navigation').addClass('header-white');
        } else {
            $('.site-navigation,.trans-navigation').removeClass('header-white');
        }
    });

    return (
    <Navbar className="navbar navbar-expand-lg fixed-top trans-navigation">
        <Container className="container">
            <NavbarBrand className="navbar-brand"  href="#">DOIT
                <img src="images/logo.png" alt="" class="img-fluid b-logo"/>
            </NavbarBrand>
            <NavbarToggler class="navbar-toggler" type="button" onClick={()=>setIsOpen(!isOpen)}  navbar>
                <span class="navbar-toggler-icon">
                    <i className="fa fa-bars"></i>
                </span>
            </NavbarToggler>
            <Collapse className="collapse navbar-collapse justify-content-end" id="mainNav" isOpen={isOpen} navbar>
                <Nav className='navbar-nav'>
                   <NavItem className="nav-item">
                        <NavLink class="nav-link" href="#" id="navbarWelcome" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink class="nav-link smoth-scroll" href="about.html">About</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink class="nav-link smoth-scroll" href="service.html">Service</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink class="nav-link smoth-scroll" href="pricing.html">Pricing</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink class="nav-link smoth-scroll" href="blog.html">Blog</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink class="nav-link smoth-scroll" href="contact.html">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
    )
}

