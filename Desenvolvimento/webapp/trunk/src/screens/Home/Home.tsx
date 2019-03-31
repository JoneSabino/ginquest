import i18next from 'i18next';
import React, { Component } from 'react';
import logo from '../../assets/icon512.png';
import '../../App.css';
import './Home.css';
import Form from 'react-bootstrap/Form';
import { withTranslation, WithTranslation } from 'react-i18next';
import {
    RouteChildrenProps,
    withRouter,
    RouteComponentProps,
} from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(event: any) {
        event.preventDefault();
        this.props.history.push('/gincanas');
    }

    public render() {
        const { t } = this.props;
        return (
            <div className="App App-header App-Home">
                <div className="container">
                    <img src={logo} className="App-logo" alt="GinQuest" />

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
                </div>
            </div>
        );
    }
}

export default withRouter(withTranslation()(Home));
