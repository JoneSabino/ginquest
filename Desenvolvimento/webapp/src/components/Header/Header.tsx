import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { withTranslation } from 'react-i18next';

interface State {}

class Header extends Component<any, State> {
    public render() {
        const { t } = this.props;
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as="div">
                        <Link to="/">GinQuest</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavDropdown title="Quiz" id="quiz-nav-dropdown">
                                <NavDropdown.Item as="div">
                                    <NavLink to="/quiz">List</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item as="div">
                                    <NavLink to="/quiz/create">Create</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withTranslation()(Header);
