import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router';
import InternationalizationWrapper from '../AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <InternationalizationWrapper>
                <Header />
            </InternationalizationWrapper>
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
