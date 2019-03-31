import React from 'react';
import ReactDOM from 'react-dom';
import DesktopHeader from './DesktopHeader';
import { MemoryRouter } from 'react-router';
import InternationalizationWrapper from '../../AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <InternationalizationWrapper>
                <DesktopHeader />
            </InternationalizationWrapper>
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
