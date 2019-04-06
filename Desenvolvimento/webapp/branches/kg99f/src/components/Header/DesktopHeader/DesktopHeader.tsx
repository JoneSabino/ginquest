import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';
import i18next from 'i18next';
import './DesktopHeader.css';

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class DesktopHeader extends Component<Props, State> {
    public render() {
        const { t } = this.props;
        return (
            <Navbar
                bg="light"
                expand="sm"
                sticky="top"
                id="DesktopHeader-Navbar"
            >
                <LinkContainer to="/">
                    <Navbar.Brand>GinQuest</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <LinkContainer to="/activity/location">
                            <Nav.Link>{t('Location')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/activity/desafio">
                            <Nav.Link>{t('Desafio')}</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Quiz" id="quiz-nav-dropdown">
                            <LinkContainer to="/activity/quiz/list">
                                <NavDropdown.Item>{t('List')}</NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to="/activity/quiz/create">
                                <NavDropdown.Item>
                                    {t('Create')}
                                </NavDropdown.Item>
                            </LinkContainer>
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
        );
    }
}

export default withRouter(withTranslation()(DesktopHeader));
