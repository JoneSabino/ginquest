import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import BodyContainer from './components/BodyContainer/BodyContainer';
import Activity from './screens/Activity/Activity';
import Gincanas from './screens/Gincanas/Gincanas';
import Gincana from './screens/Gincana/Gincana';
import './App.css';
import { Container } from 'react-bootstrap';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Container fluid id="mainContainer">
                    <Route component={Header} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <BodyContainer>
                            <Route path="/activity" component={Activity} />
                            <Route path="/gincanas" component={Gincanas} />
                            <Route path="/gincana/:id" component={Gincana} />
                        </BodyContainer>
                        <Redirect from="*" to="/" />
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;
