import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router';
import QuizActivity from '../../components/Activity/QuizActivity/QuizActivity';
import LocationActivity from '../../components/Activity/LocationActivity/LocationActivity';
import Desafio from '../../components/Activity/ChallengeActivity/ChallengeActivity';
import Jumbotron from 'react-bootstrap/Jumbotron';

interface Props extends RouteComponentProps {}

interface State {}

class Activity extends Component<Props, State> {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Atividade aqui em baixo</h1>
                </Jumbotron>
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
