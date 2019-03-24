import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Location.css';
import LocationActivity from '../../components/LocationActivity/LocationActivity';
import { withScriptjs } from 'react-google-maps';

interface Props {}

interface State {}

class Location extends Component<Props, State> {
    public render() {
        return (
            <main>
                <Switch>
                    <Route
                        exact
                        path="/location"
                        component={LocationActivity}
                    />
                </Switch>
            </main>
        );
    }
}

export default Location;
