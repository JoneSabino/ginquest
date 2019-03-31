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
            <LocationActivity
                tarefa={{
                    idtarefa: 0,
                    idtipotarefa: 0,
                    nome: 'Teste',
                    destination_lat: -50,
                    destination_lng: -50,
                    radius: -50,
                }}
            />
        </InternationalizationWrapper>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
