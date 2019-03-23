import i18next from 'i18next';
import React, { Component } from 'react';
import logo from '../../assets/icon512.png';
import './Home.css';
import Form from 'react-bootstrap/Form';
import { withTranslation } from 'react-i18next';

class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { t } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default withTranslation()(Home);
