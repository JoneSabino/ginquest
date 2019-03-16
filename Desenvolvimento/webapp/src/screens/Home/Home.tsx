import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

import { Translation } from 'react-i18next';
import i18next from 'i18next';

interface Props {}

interface State {}

class Home extends Component<Props, State> {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={() => i18next.changeLanguage('en')}>
                        En
                    </button>
                    <button onClick={() => i18next.changeLanguage('pt')}>
                        Pt
                    </button>
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
