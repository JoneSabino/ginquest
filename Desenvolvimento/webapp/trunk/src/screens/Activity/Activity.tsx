import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router';
import QuizActivity from '../../components/Activity/QuizActivity/QuizActivity';
import LocationActivity from '../../components/Activity/LocationActivity/LocationActivity';
import Desafio from '../../components/Activity/ChallengeActivity/ChallengeActivity';
import Image from 'react-bootstrap/Image';
import { Col, Row, Media, NavDropdown, ProgressBar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';

interface Props extends RouteComponentProps {}

interface State {}

class Activity extends Component<Props, State> {
    public render() {
        return (
            <div>
                <Row>
                    <Col xs={3}>
                        <Image
                            src={logo}
                            width="80"
                            height="80"
                            roundedCircle
                        />
                    </Col>
                    <Col xs={9}>
                        <Row>
                            <h5>Coca Cola - Caça ao Tesouro</h5>
                        </Row>
                        <Row>
                            <p>SP - São Paulo</p>
                        </Row>
                    </Col>
                </Row>
                <NavDropdown.Divider />
                <Row>
                    <Col xs={3} className="align-self-center">
                        <h5>Level 1</h5>
                    </Col>
                    <Col xs={9} className="align-self-center">
                        <ProgressBar variant="success" now={40} />
                    </Col>
                </Row>

                <Switch>
                    <Route
                        path={`${this.props.match!.url}/quiz`}
                        component={QuizActivity}
                    />
                    <Route
                        path={`${this.props.match!.url}/location`}
                        component={LocationActivity}
                    />
                    <Route
                        path={`${this.props.match!.url}/desafio`}
                        component={Desafio}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Activity);
