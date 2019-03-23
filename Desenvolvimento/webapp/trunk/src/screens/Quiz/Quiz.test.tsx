import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Quiz />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
