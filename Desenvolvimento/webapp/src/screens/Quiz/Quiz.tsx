import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuizForm from '../../components/QuizForm/QuizForm';
import QuizList from '../../components/QuizList/QuizList';
import './Quiz.css';

interface Props {}

interface State {}

class Quiz extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <main>
                <Switch>
                    <Route exact path="/quiz" component={QuizList} />
                    <Route path="/quiz/create" component={QuizForm} />
                </Switch>
            </main>
        );
    }
}

export default Quiz;
