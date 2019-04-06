import React, { Component } from 'react';
import logo from '../../assets/icon512.png';
import './Home.css';
import Form from 'react-bootstrap/Form';
import { withTranslation, WithTranslation } from 'react-i18next';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';

const config = {
    apiKey: 'AIzaSyCucpQNC4-t_o_d1Hrbm1NMMpafeHYaG8M',
    authDomain: 'ginquest-app.firebaseapp.com',
    databaseURL: 'https://ginquest-app.firebaseio.com',
    projectId: 'ginquest-app',
    storageBucket: 'ginquest-app.appspot.com',
    messagingSenderId: '551462319727',
};
firebase.initializeApp(config);
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/activity/location',
    //signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // TODO: PRIVACY POLICE PAGE AND URL
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    //tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    // privacyPolicyUrl: function() {
    //     window.location.assign('<your-privacy-policy-url>');
    // },
};

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
    }

    public login(event: any) {
        event.preventDefault();
        this.props.history.push('/gincanas');
    }

    public render() {
        const { t } = this.props;
        return (
            <div className="Home">
                <div className="container">
                    <img src={logo} className="Home-logo" alt="GinQuest" />

                    <Form id="Home-Form--Login" onSubmit={this.login}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check
                                type="checkbox"
                                label="Permanecer logado! :)"
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Acessar
                        </Button>
                    </Form>

                    <div className="Home-Btn--New">
                        <a className="btn btn-primary">{t('Home.NewUser')}</a>
                    </div>

                    <div className="Home-Link--Forget">
                        <a href="">{t('Home.ForgotPassword')}</a>
                    </div>
                    <div>
                        <p>Please sign-in:</p>
                        <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(withTranslation()(Home));
