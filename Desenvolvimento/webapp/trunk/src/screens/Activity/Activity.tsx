import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router';
import QuizActivity from '../../components/Activity/QuizActivity/QuizActivity';
import LocationActivity from '../../components/Activity/LocationActivity/LocationActivity';
import DesafioActivity from '../../components/Activity/ChallengeActivity/ChallengeActivity';
import Image from 'react-bootstrap/Image';
import { Col, Row, NavDropdown, ProgressBar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import apiService from '../../api/ginQuest';
import './Activity.css';

interface Props extends RouteComponentProps {}

interface State {
    tarefa?: any;
}

class Activity extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { tarefa: {} };
    }

    public async componentDidMount() {
        // @ts-ignore
        const id = this.props.match!.params.id;
        const isNumber = Number.isInteger(Number(id));

        if (id && isNumber) {
            const tarefa = await apiService.getTarefa(id);
            this.setState({ tarefa });
        }
    }

    public render() {
        const { idtipotarefa } = this.state.tarefa;

        let activity;
        if (idtipotarefa === 1) {
            activity = <DesafioActivity {...this.state.tarefa} />;
        } else if (idtipotarefa === 2) {
            activity = <QuizActivity />;
        } else if (idtipotarefa === 3) {
            activity = <LocationActivity tarefa={this.state.tarefa} />;
        }

        return (
            <div>
                <Row className="Activity-HeaderBrand">
                    <Col xs={'auto'}>
                        <Image
                            src={logo}
                            width="80"
                            height="80"
                            roundedCircle
                        />
                    </Col>
                    <Col xs={'auto'}>
                        <Row>
                            <h5>Coca Cola - Caça ao Tesouro</h5>
                        </Row>
                        <Row>
                            <p>SP - São Paulo</p>
                        </Row>
                    </Col>
                </Row>
                <NavDropdown.Divider />
                <Row className="Activity-Level">
                    <Col xs={3} className="align-self-center">
                        Level 1
                    </Col>
                    <Col xs={9} className="align-self-center">
                        <ProgressBar variant="success" now={40} />
                    </Col>
                </Row>

                <div className="Activity-HR" />

                <div className="Activity-BG--Sand">
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
            </div>
        );
    }
}

export default withRouter(Activity);
