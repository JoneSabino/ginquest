import i18next from 'i18next';
import React, { Component } from 'react';
import logo from '../../assets/icon512.png';
import '../../App.css';
import './Home.css';
import Form from 'react-bootstrap/Form';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router';
import { Button } from 'react-bootstrap';

interface Props extends RouteChildrenProps, WithTranslation {}

interface State {}

class Home extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { t } = this.props;
        return (
            <div className="App App-header App-Home">
                <div className="container">
                    <img src={logo} className="App-logo" alt="GinQuest" />

                    <Form id="Home-Form--Login">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check type="checkbox" label="Permanecer logado! :)" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Acessar
                        </Button>
                    </Form>

                    <div className="Home-Btn--New">
                        <a href="" className="btn btn-primary">Sou um novo usuário</a>
                    </div>
                    
                    <div className="Home-Link--Forget">
                        <a href="">Oooops! Esqueci minha senha!</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default withTranslation()(Home);
