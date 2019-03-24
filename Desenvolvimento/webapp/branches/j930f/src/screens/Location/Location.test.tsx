import React from 'react';
import ReactDOM from 'react-dom';
import Location from './Location';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Location />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
