import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import '../../src/index.scss';

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    CinematFlicks
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {!user && (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signup">
                                    Sign up
                                </Nav.Link>
                            </>
                        )}
                        {/* After login */}
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                                    <Nav.Link as={Link} to="/account">
                                        Account
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/favorites">
                                        Favorites
                                    </Nav.Link>
                                    <NavDropdown.Divider />
                                    <Nav.Link onClick={onLoggedOut}>
                                        Logout
                                    </Nav.Link>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}