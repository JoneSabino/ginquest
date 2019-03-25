import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Desafio from './ChallengeActivity';

jest.mock('react-qr-reader', () => (props: any) => {
    return <div />;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Desafio />, div);
    ReactDOM.unmountComponentAtNode(div);
});
