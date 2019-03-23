import React from 'react';
import ReactDOM from 'react-dom';
import Gincana from './Gincana';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gincana />, div);
    ReactDOM.unmountComponentAtNode(div);
});
