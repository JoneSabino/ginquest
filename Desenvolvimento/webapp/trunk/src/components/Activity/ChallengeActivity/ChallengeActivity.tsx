import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import QrReader from 'react-qr-reader';

interface Props extends WithTranslation {
    qrcode: string;
    description?: string;
    image?: any;
}

interface State {
    result: string;
    isCompleted: boolean;
}

class Desafio extends Component<Props, State> {
    private _isMounted: boolean = false;

    constructor(props: Props) {
        super(props);
        this.state = {
            result: 'No result',
            isCompleted: false,
        };
        this.handleScan = this.handleScan.bind(this);
        this._isMounted = true;
    }

    public handleScan = (data: string | null) => {
        if (data) {
            if (data === this.props.qrcode) {
                this._isMounted &&
                    this.setState({
                        isCompleted: true,
                    });
            } else {
                this._isMounted &&
                    this.setState({
                        result: data,
                    });
            }
        }
    };

    public componentWillUnmount() {
        this._isMounted = false;
    }

    public handleError = (err: any) => {
        console.error(err);
    };
    public render() {
        const { isCompleted = false, result = '' } = this.state || {};
        const { image = '', description = '' } = this.props;
        const tela = (
            <div>
                <div className="Activity-Title">
                    <span className="Activity-Title--Left" />
                    Desafio
                    <span className="Activity-Title--Right" />
                </div>

                <div className="Activity-Image">
                    {image ? (
                        <img
                            style={{ height: '100%', width: '100%' }}
                            src={image}
                        />
                    ) : (
                        ''
                    )}
                </div>
                {description ? (
                    <div className="Activity-Description">{description}</div>
                ) : (
                    ''
                )}
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{result}</p>
            </div>
        );
        return isCompleted ? <div>Tarefa Completada com sucesso!!!</div> : tela;
    }
}

export default withTranslation()(Desafio);
