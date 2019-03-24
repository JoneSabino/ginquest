import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter,
    RouterChildContext,
} from 'react-router-dom';
import QuizForm from './QuizForm/QuizForm';
import QuizList from './QuizList/QuizList';
import './QuizActivity.css';
import { RouteChildrenProps } from 'react-router';

interface Props extends RouteChildrenProps {}

interface State {}

class QuizActivity extends Component<Props, State> {
    public render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path={`${this.props.match!.url}/list`}
                        component={QuizList}
                    />
                    <Route
                        path={`${this.props.match!.url}/create`}
                        component={QuizForm}
                    />
                </Switch>
            </main>
        );
    }
}

export default QuizActivity;
