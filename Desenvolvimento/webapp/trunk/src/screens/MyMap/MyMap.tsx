import React, { Component } from 'react';
import QuestMap from '../../components/Map/Map';

class MyMap extends Component<any, any> {
    public render() {
        const { t } = this.props;
        return (
            <div style={{ height: '500px' }}>
                <QuestMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8tt8GfmgddeL5pFRBF9_TfNpcVS2zQZQ&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default MyMap;
