import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Gincana from '../../screens/Quiz/Quiz';
import Home from '../../screens/Home/Home';

interface Props {}

interface State {}

class Content extends Component<Props, State> {
    public render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/quiz" component={Gincana} />
                </Switch>
            </main>
        );
    }
}

export default Content;
