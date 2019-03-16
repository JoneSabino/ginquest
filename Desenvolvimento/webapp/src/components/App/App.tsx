import React, { Component } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default App;
