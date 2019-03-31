import React, { Component } from 'react';
import './LocationActivity.css';
import MapWrapper from '../../MapWrapper/MapWrapper';
import Button from 'react-bootstrap/Button';
import { WithTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';
import apiService from '../../../services/ginQuestApi';

interface Props extends WithTranslation {}

interface State {
    locationActivityData?: {
        id: number;
        destination: {
            lat: number;
            lng: number;
        };
        radius: number;
    };
    insideCircle: boolean;
    errorMessage: string | null;
}

class LocationActivity extends Component<Props, State> {
    constructor(pros: Props, state: State) {
        super(pros, state);
        this.state = {
            insideCircle: false,
            errorMessage: null,
            locationActivityData: {
                id: 0,
                destination: {
                    lat: 0,
                    lng: 0,
                },
                radius: 100,
            },
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
            errorMessage,
        });
    }

    public async componentDidMount() {
        const locationActivityData = await apiService.getLocationActivityData(
            5
        );

        this.setState({
            locationActivityData,
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
                        destination={
                            this.state.locationActivityData!.destination
                        }
                        radius={this.state.locationActivityData!.radius}
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
