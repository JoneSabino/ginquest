import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router';
import apiService from '../../services/ginQuestApi';
import { ListGroup } from 'react-bootstrap';

interface Props extends RouteChildrenProps, WithTranslation {}

interface State {
    idgincana: number;
    nome: string;
    dataCriacao: Date;
    criador: {
        idusuario: number;
        nome: string;
    };
    tarefas: [];
}

class Gincana extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: '',
            dataCriacao: new Date(),
            tarefas: [],
            idgincana: 0,
            criador: { idusuario: 0, nome: '' },
        };
    }

    async componentDidMount() {
        const gincana = await apiService.getGincana(
            // @ts-ignore
            this.props.match!.params.id
        );
        this.setState({ nome: gincana.nome, criador: gincana.criador });
    }

    render() {
        const { t } = this.props;
        const { nome, criador, dataCriacao, tarefas } = this.state;
        return (
            <div>
                <h2>{nome}</h2>
                <label>
                    {t('CRIADO_POR_EM', { nome: criador.nome, dataCriacao })}
                </label>
                <ListGroup>
                    {tarefas.map(tarefa => (
                        <ListGroup.Item>Tarefa</ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default withTranslation()(Gincana);
