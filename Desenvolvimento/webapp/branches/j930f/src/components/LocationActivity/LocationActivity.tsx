import React, { Component } from 'react';
import './LocationActivity.css';
import MapWrapper from '../../components/MapWrapper/MapWrapper';
import Button from 'react-bootstrap/Button';
import { RouteComponentProps } from 'react-router';
import { WithTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';

const mockDestination = {
    lat: -23.554623,
    lng: -46.905776,
};

const mockRadius = 100;

interface Props extends RouteComponentProps, WithTranslation {}

interface State {
    destination: {
        lat: number;
        lng: number;
    };
    radius: number;
    insideCircle: boolean;
    errorMessage: string | null;
}

class LocationActivity extends Component<Props, State> {
    constructor(pros: Props, state: State) {
        super(pros, state);
        this.state = {
            insideCircle: false,
            destination: mockDestination,
            radius: mockRadius,
            errorMessage: null,
        };
        this.positionChanged = this.positionChanged.bind(this);
    }

    private positionChanged(
        position: google.maps.LatLng,
        circleBounds: google.maps.LatLngBounds,
        errorMessage: string | null
    ): void {
        this.setState({
            insideCircle: circleBounds.contains(position),
            errorMessage: errorMessage,
        });
    }

    public render() {
        let error;
        if (this.state.errorMessage) {
            error = <h1>{this.state.errorMessage}</h1>;
        }
        return (
            <div>
                <div>
                    <MapWrapper
                        destination={this.state.destination}
                        radius={this.state.radius}
                        onPositionChanged={this.positionChanged}
                        {...this.props}
                        googleMapURL={
                            `https://maps.googleapis.com/maps/api/js?` +
                            `key=AIzaSyD8tt8GfmgddeL5pFRBF9_TfNpcVS2zQZQ` +
                            `&language=` +
                            i18next.language
                        }
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div>
                    <Button
                        disabled={!this.state.insideCircle}
                        onClick={(e: any) => {
                            alert('Opa Fi');
                        }}
                    >
                        {this.props.t('Location.SubmitButton')}
                    </Button>
                    {error}
                </div>
            </div>
        );
    }
}

export default withTranslation()(LocationActivity);
