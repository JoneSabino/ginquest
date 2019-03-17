import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { withTranslation } from 'react-i18next';

interface State {}

class Header extends Component<any, State> {
    public render() {
        const { t } = this.props;
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">GinQuest</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">{t('Home')}</Nav.Link>
                        <NavDropdown title="Quiz" id="quiz-nav-dropdown">
                            <NavDropdown.Item href="/quiz/create">
                                {t('Create')}
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/quiz/">
                                {t('List')}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withTranslation()(Header);
