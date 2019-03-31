import React from 'react';
import ReactDOM from 'react-dom';
import LocationActivity from './LocationActivity';
import InternationalizationWrapper from '../../AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

jest.mock('../../MapWrapper/MapWrapper', () => () => {
    return <div />;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <InternationalizationWrapper>
            <LocationActivity />
        </InternationalizationWrapper>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
