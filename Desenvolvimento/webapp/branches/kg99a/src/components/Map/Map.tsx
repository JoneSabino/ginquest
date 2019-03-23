import React, { Component } from 'react';
import {
    DirectionsRenderer,
    GoogleMap,
    withGoogleMap,
    withScriptjs,
} from 'react-google-maps';

interface Props {
    history: any;
}

interface State {}

class QuestMap extends Component<any, any> {
    constructor(Props: any, State: any) {
        super(Props, State);
        this.state = { correct: 1 };
    }

    getLocation() {
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
                            position.coords.latitude,
                            position.coords.longitude
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

    componentDidMount() {
        this.getLocation();
    }

    public render() {
        const { t } = this.props;
        const props = this.state;
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {props.directions && (
                    <DirectionsRenderer directions={props.directions} />
                )}
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(QuestMap));
