import i18next from 'i18next';
import React, { Component } from 'react';
import { Translation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import './Home.css';
import Form from 'react-bootstrap/Form';

interface Props {}

interface State {}

class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Language Select</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(event: any) => {
                                    i18next.changeLanguage(event.target.value);
                                }}
                            >
                                <option value="en-US">en-US</option>
                                <option value="pt-BR">pt-BR</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Translation>
                            {t => <h1>{t('Welcome to React')}</h1>}
                        </Translation>
                    </a>
                </header>
            </div>
        );
    }
}

export default Home;
