import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

interface Props {}

interface State {}

class Header extends Component<Props, State> {
    public render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">GinQuest</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Quiz" id="quiz-nav-dropdown">
                            <NavDropdown.Item href="/quiz/create">
                                Create
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/quiz/">
                                List
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
