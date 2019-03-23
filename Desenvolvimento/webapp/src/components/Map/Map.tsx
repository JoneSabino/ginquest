import React, { Component } from 'react';
import {
    DirectionsRenderer,
    GoogleMap,
    withGoogleMap,
    withScriptjs,
} from 'react-google-maps';

interface Props {}

interface State {
    directions: any;
    correct: number;
}

class QuestMap extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { correct: 1, directions: null };
    }

    private getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const DirectionsService = new google.maps.DirectionsService();

                DirectionsService.route(
                    {
                        origin: new google.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        ),
                        destination: new google.maps.LatLng(
                            position.coords.latitude + 1,
                            position.coords.longitude + 1
                        ),
                        travelMode: google.maps.TravelMode.WALKING,
                    },
                    (result, status) => {
                        console.log(result);
                        if (status === google.maps.DirectionsStatus.OK) {
                            this.setState({
                                directions: result,
                            });
                        } else {
                            console.error(
                                `error fetching directions ${result}`
                            );
                        }
                    }
                );
            });
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }

    public componentDidMount() {
        this.getLocation();
    }

    public render() {
        const state = this.state;
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {state.directions && (
                    <DirectionsRenderer directions={state.directions} />
                )}
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(QuestMap));
