import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { MemoryRouter } from 'react-router';
import InternationalizationWrapper from '../../components/AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <InternationalizationWrapper>
                <Home />
            </InternationalizationWrapper>
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
