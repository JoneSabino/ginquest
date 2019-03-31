import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InternationalizationWrapper from './components/AuxiliarComponents/InternationalizationWrapper/InternationalizationWrapper';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <InternationalizationWrapper>
            <App />
        </InternationalizationWrapper>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
