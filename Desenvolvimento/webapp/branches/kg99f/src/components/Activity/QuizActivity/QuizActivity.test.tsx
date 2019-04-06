import React from 'react';
import ReactDOM from 'react-dom';
import QuizActivity from './QuizActivity';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <QuizActivity />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
