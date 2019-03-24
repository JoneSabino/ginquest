import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Location.css';
import LocationActivity from '../../components/Activity/LocationActivity/LocationActivity';

interface Props {}

interface State {}

class Location extends Component<Props, State> {
    public render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path="/activity/location"
                        component={LocationActivity}
                    />
                </Switch>
            </main>
        );
    }
}

export default Location;
