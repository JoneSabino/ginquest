import i18next from 'i18next';
import React, { Component } from 'react';
import logo from '../../assets/icon512.png';
import './Home.css';
import Form from 'react-bootstrap/Form';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router';

interface Props extends RouteChildrenProps, WithTranslation {}

interface State {}

class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { t } = this.props;
        return (
            <div className="App App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default withTranslation()(Home);
