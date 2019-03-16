import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../screens/Home/Home';
import Gincana from '../../screens/Gincana/Gincana';

class Content extends Component<any, any> {
    public render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gincana" component={Gincana} />
                </Switch>
            </main>
        );
    }
}

export default Content;
