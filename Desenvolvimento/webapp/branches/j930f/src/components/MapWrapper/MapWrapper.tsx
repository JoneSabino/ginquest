import React, { Component } from 'react';
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    WithGoogleMapProps,
    WithScriptjsProps,
    Circle,
    DirectionsRenderer,
} from 'react-google-maps';
import { RouteComponentProps } from 'react-router';
import { WithTranslation } from 'react-i18next';

interface Props
    extends RouteComponentProps,
        WithTranslation,
        WithGoogleMapProps,
        WithScriptjsProps {
    destination: { lat: number; lng: number };
    radius: number;
    onPositionChanged: (
        position: google.maps.LatLng,
        circleBounds: google.maps.LatLngBounds,
        errorMessage: string | null
    ) => void;
}

interface State {
    directions?: google.maps.DirectionsResult;
    origin?: google.maps.LatLng;
    error?: string;
}

class MapWrapper extends Component<Props, State> {
    constructor(pros: Props, state: State) {
        super(pros, state);
        this.state = { directions: undefined };
        this.circle = React.createRef();
    }

    private showError(error: PositionError) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('User denied the request for Geolocation.');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Location information is unavailable.');
                break;
            case error.TIMEOUT:
                alert('The request to get user location timed out.');
                break;
        }
    }

    private getRoute() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                position => {
                    const DirectionsService = new google.maps.DirectionsService();
                    const origin = new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    const destination = new google.maps.LatLng(
                        this.props.destination.lat,
                        this.props.destination.lng
                    );
                    DirectionsService.route(
                        {
                            origin: origin,
                            destination: destination,
                            travelMode: google.maps.TravelMode.WALKING,
                        },
                        (result, status) => {
                            let errorMessage = null;
                            if (status === google.maps.DirectionsStatus.OK) {
                                this.setState({
                                    directions: result,
                                    origin: origin,
                                });
                            } else if (
                                status ===
                                google.maps.DirectionsStatus.ZERO_RESULTS
                            ) {
                                errorMessage = this.props.t(
                                    'Location.RouteNotFound'
                                );
                            } else if (
                                status ===
                                google.maps.DirectionsStatus.NOT_FOUND
                            ) {
                                errorMessage = this.props.t(
                                    'Location.LocationNotFound'
                                );
                            } else {
                                errorMessage = JSON.stringify(result);
                            }
                            this.props.onPositionChanged(
                                origin,
                                this.circle.current!.getBounds(),
                                errorMessage
                            );
                        }
                    );
                },
                this.showError,
                { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }

    public componentDidMount(): void {
        this.getRoute();
    }

    private circle: React.RefObject<Circle>;

    public render() {
        const state = this.state;
        const props = this.props;
        let route = null;
        if (state.directions) {
            route = <DirectionsRenderer directions={state.directions} />;
        }
        return (
            <GoogleMap defaultZoom={15} defaultCenter={props.destination}>
                {route}
                <Circle
                    ref={this.circle}
                    center={props.destination}
                    radius={props.radius}
                    options={{
                        fillColor: '#088',
                        strokeColor: '#00f',
                    }}
                />
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(MapWrapper));
