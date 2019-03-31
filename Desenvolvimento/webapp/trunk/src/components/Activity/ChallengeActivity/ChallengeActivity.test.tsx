import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChallengeActivity from './ChallengeActivity';
import InternationalizationWrapper from '../../AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

jest.mock('react-qr-reader', () => (props: any) => {
    return <div />;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <InternationalizationWrapper>
            <ChallengeActivity />
        </InternationalizationWrapper>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
