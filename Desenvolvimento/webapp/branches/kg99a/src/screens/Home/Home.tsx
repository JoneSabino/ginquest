import i18next from 'i18next';
import React, { Component } from 'react';
import logo from '../../assets/icon512.png';
import './Home.css';
import Form from 'react-bootstrap/Form';
import ReactDOM from 'react-dom';
import { withTranslation } from 'react-i18next';
import FacebookLogin from 'react-facebook-login';

class Home extends Component<any, any> {
    private responseFacebook: any;
    private componentClicked: any;
    constructor(props: any) {
        super(props);
    }

    // @ts-ignore
    public render() {
        const { t } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                </header>

                <div className="facebook-login">
                    <button className="facebook-button" type="button">
                        <FacebookLogin
                            appId="2208482769481221"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook}/>
                    </button>
                </div>

                <div id={"teste"}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        );
    }
}

export default withTranslation()(Home);
