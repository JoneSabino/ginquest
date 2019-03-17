import i18next from 'i18next';
import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
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
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>{t('Language Select')}</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(event: any) => {
                                    i18next.changeLanguage(event.target.value);
                                }}
                            >
                                <option value="en-US">{t('en-US')}</option>
                                <option value="pt-BR">{t('pt-BR')}</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {t('Edit')} <code>src/App.tsx</code>{' '}
                        {t('and save to reload')}}.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1>{t('Welcome to React')}</h1>
                    </a>
                </header>
            </div>
        );
    }
}

export default withTranslation()(Home);
