import React, { Component } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';

class App extends Component<any, any> {
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
