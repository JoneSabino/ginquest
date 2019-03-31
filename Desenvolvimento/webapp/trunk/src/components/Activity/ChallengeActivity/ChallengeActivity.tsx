import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import QrReader from 'react-qr-reader';
import apiService from '../../../api/ginQuest';

interface Props extends WithTranslation {}

interface State {
    result: string;
    isCompleted: boolean;
    tarefa?: {
        qrcode: string;
        description?: string;
        image?: any;
    };
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

    public async componentDidMount() {
        const tarefa = await apiService.getTarefaQuiz(5);

        this._isMounted &&
            this.setState({
                tarefa,
            });
    }

    public handleScan = (data: string | null) => {
        if (data) {
            if (this.state.tarefa && data === this.state.tarefa.qrcode) {
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
        const {
            isCompleted = false,
            tarefa = { image: '', description: '' },
            result = '',
        } = this.state || {};
        const { image, description } = tarefa;
        const tela = (
            <div>
                {image ? (
                    <img
                        style={{ height: '100%', width: '100%' }}
                        src={image}
                    />
                ) : (
                    ''
                )}
                {description ? <label>{description}</label> : ''}
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
