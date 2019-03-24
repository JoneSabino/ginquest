import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

interface State {}

class Header extends Component<any, State> {
    public render() {
        const { t } = this.props;
        return (
            <div>
                <Navbar bg="light" expand="sm">
                    <Navbar.Brand as="div">
                        <Link to="/">GinQuest</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <NavLink to="/desafio">{t('Desafio')}</NavLink>
                        <Nav className="mr-auto">
                            <NavDropdown title="Quiz" id="quiz-nav-dropdown">
                                <NavDropdown.Item as="div">
                                    <NavLink to="/quiz">{t('List')}</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item as="div">
                                    <NavLink to="/quiz/create">
                                        {t('Create')}
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <Navbar.Text style={{ paddingRight: '10px' }}>
                                {t('Language Select')}{' '}
                            </Navbar.Text>
                            <Form.Control
                                as="select"
                                onChange={(event: any) => {
                                    i18next.changeLanguage(event.target.value);
                                }}
                            >
                                <option value="en-US">English</option>
                                <option value="pt-BR">Português</option>
                            </Form.Control>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withTranslation()(Header);
