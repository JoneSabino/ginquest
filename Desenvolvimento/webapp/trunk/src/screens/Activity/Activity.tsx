import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router';
import QuizActivity from '../../components/Activity/QuizActivity/QuizActivity';
import LocationActivity from '../../components/Activity/LocationActivity/LocationActivity';
import DesafioActivity from '../../components/Activity/ChallengeActivity/ChallengeActivity';
import Image from 'react-bootstrap/Image';
import { Col, Row, NavDropdown, ProgressBar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import apiService from '../../api/ginQuest';

interface Props extends RouteComponentProps {}

interface State {
    idtipotarefa?: number;
}

class Activity extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        // @ts-ignore
        if (this.props.match!.params.id) {
            const tarefa = await apiService.getTarefa(
                // @ts-ignore
                this.props.match!.params.id
            );
            console.log(tarefa.idtipotarefa);
            this.setState({ idtipotarefa: tarefa.idtipotarefa });
        }
    }

    public render() {
        const { idtipotarefa } = this.state;

        let activity;
        if (idtipotarefa === 1) {
            activity = <QuizActivity />;
        } else if (idtipotarefa === 2) {
            activity = <LocationActivity />;
        } else if (idtipotarefa === 3) {
            activity = <DesafioActivity />;
        }

        console.log(activity);

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

                {activity ? (
                    activity
                ) : (
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
                            component={DesafioActivity}
                        />
                    </Switch>
                )}
            </div>
        );
    }
}

export default withRouter(Activity);
