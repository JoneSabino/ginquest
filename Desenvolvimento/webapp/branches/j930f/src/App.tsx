import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quiz from './screens/Quiz/Quiz';
import Location from './screens/Location/Location';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import BodyContainer from './components/BodyContainer/BodyContainer';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Header} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <BodyContainer>
                            <Route path="/quiz" component={Quiz} />
                            <Route path="/location" component={Location} />
                        </BodyContainer>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
