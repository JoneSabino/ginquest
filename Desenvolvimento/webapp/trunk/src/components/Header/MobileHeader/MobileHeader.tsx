import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class MobileHeader extends Component<Props, State> {
    public render() {
        const { t } = this.props;
        return (
            <Navbar>
                <Nav fill justify variant="tabs">
                    <Nav.Item>
                        <LinkContainer exact to="/">
                            <Nav.Link>Active</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/activity/location">
                            <Nav.Link eventKey="link-1">
                                {t('Location')}
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/activity/desafio">
                            <Nav.Link eventKey="link-2">
                                {t('Desafio')}
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(withTranslation()(MobileHeader));
