import React from 'react';
import ReactDOM from 'react-dom';
import MobileHeader from './MobileHeader';
import { MemoryRouter } from 'react-router';
import InternationalizationWrapper from '../../AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

jest.mock('@fortawesome/react-fontawesome', () => {
    const MyModule = {
        FontAwesomeIcon: () => <i className={`fa`} />,
    };
    return MyModule;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <InternationalizationWrapper>
                <MobileHeader />
            </InternationalizationWrapper>
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
