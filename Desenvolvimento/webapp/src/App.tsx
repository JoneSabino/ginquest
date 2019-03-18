import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quiz from './screens/Quiz/Quiz';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/quiz" component={Quiz} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
