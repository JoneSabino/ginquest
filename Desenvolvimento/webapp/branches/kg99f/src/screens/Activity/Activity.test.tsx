import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './Activity';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Activity />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
