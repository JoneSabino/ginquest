import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router';
import './MobileHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class MobileHeader extends Component<Props, State> {
    public render() {
        const { t } = this.props;
        return (
            <Nav fill justify variant="tabs">
                <Nav.Item>
                    <LinkContainer exact to="/">
                        <Nav.Link eventKey="link-0">
                            <FontAwesomeIcon icon="home" size="lg" />
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/activity/location">
                        <Nav.Link eventKey="link-1">
                            <FontAwesomeIcon icon="map-marker-alt" size="lg" />
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/activity/desafio">
                        <Nav.Link eventKey="link-2">
                            <FontAwesomeIcon icon="cogs" size="lg" />
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/gincanas">
                        <Nav.Link eventKey="link-3">
                            <FontAwesomeIcon icon="home" size="lg" />
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/activity/quiz/create">
                        <Nav.Link eventKey="link-4">
                            <FontAwesomeIcon icon="igloo" size="lg" />
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        );
    }
}

export default withRouter(withTranslation()(MobileHeader));
