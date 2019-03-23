import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quiz from './screens/Quiz/Quiz';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import MyMap from './screens/MyMap/MyMap';
import BodyContainer from './components/BodyContainer/BodyContainer';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <BodyContainer>
                        <Route path="/quiz" component={Quiz} />
                        <Route path="/map" component={MyMap} />
                    </BodyContainer>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
