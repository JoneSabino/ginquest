import React, { Component } from 'react';
import './LocationActivity.css';
import MapWrapper from '../../MapWrapper/MapWrapper';
import Button from 'react-bootstrap/Button';
import { WithTranslation, withTranslation } from 'react-i18next';
import i18next from 'i18next';

interface Props extends WithTranslation {
    tarefa: {
        idtarefa: number;
        idtipotarefa: number;
        nome: string;
        destination_lat: number;
        destination_lng: number;
        radius: number;
    };
}

interface State {
    insideCircle: boolean;
    errorMessage: string | null;
}

class LocationActivity extends Component<Props, State> {
    private _isMounted: boolean = false;

    constructor(pros: Props, state: State) {
        super(pros, state);
        this.state = {
            insideCircle: false,
            errorMessage: null,
        };
        this.positionChanged = this.positionChanged.bind(this);
        this._isMounted = true;
    }

    private positionChanged(
        position: google.maps.LatLng,
        circleBounds: google.maps.LatLngBounds,
        errorMessage: string | null
    ): void {
        this._isMounted &&
            this.setState({
                insideCircle: circleBounds.contains(position),
                errorMessage,
            });
    }

    public componentWillUnmount() {
        this._isMounted = false;
    }

    public render() {
        let error;
        if (this.state.errorMessage) {
            error = <h1>{this.state.errorMessage}</h1>;
        }
        const { destination_lat, destination_lng, radius } = this.props.tarefa;
        return (
            <div>
                <div className="Activity-Title">
                    <span className="Activity-Title--Left"></span>
                    Localização
                    <span className="Activity-Title--Right"></span>
                </div>
                <div className="Activity-Description">
                   Museu de Arte de São Paulo Assis Chateaubriand é uma das mais importantes instituições culturais brasileiras.          
                </div>
                <div>
                    <MapWrapper
                        destination={{
                            lat: Number(destination_lat),
                            lng: Number(destination_lng),
                        }}
                        radius={Number(radius)}
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
                <div className="Button-Center">
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
