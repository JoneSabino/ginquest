import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import BodyContainer from './components/BodyContainer/BodyContainer';
import Activity from './screens/Activity/Activity';

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
                        </BodyContainer>
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
