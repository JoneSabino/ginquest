import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Quiz from './components/Activity/QuizActivity/QuizActivity';
import Location from './screens/Location/Location';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import BodyContainer from './components/BodyContainer/BodyContainer';
import Activity from './screens/Activity/Activity';
import Desafio from './screens/Desafio/Desafio';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <div>
                    <Route component={Header} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <BodyContainer>
                            <Route path="/activity" component={Activity} />
                            <Route path="/desafio" component={Desafio} />
                        </BodyContainer>
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
