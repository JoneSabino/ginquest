import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LocationActivity from './LocationActivity';

jest.mock('../../MapWrapper/MapWrapper', () => (props: any) => {
    return <div />;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LocationActivity />, div);
    ReactDOM.unmountComponentAtNode(div);
});
