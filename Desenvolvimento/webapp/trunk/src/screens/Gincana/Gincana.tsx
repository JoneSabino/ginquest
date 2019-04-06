import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router';
import apiService from '../../api/ginQuest';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface MatchParam {
    id: string;
}

interface Props extends RouteChildrenProps<MatchParam>, WithTranslation {}

interface State {
    idgincana: number;
    nome: string;
    datacriacao: Date;
    criador: {
        idusuario: number;
        nome: string;
    };
    tarefas: Array<{
        idtarefa: number;
        idgincana: number;
        idtipotarefa: number;
        nome: string;
    }>;
}

class Gincana extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            nome: '',
            datacriacao: new Date(),
            tarefas: [],
            idgincana: 0,
            criador: { idusuario: 0, nome: '' },
        };
    }

    public async componentDidMount() {
        const gincana = await apiService.getGincana(
            //  @ts-ignore
            // @ts-ignore
            this.props.match!.params.id
        );
        this.setState({
            nome: gincana.nome,
            criador: gincana.criador,
            tarefas: gincana.tarefas,
        });
    }

    public render() {
        const { t } = this.props;
        const { nome, criador, datacriacao, tarefas } = this.state;

        return (
            <div className="List">
                <div className="container">
                    <h1>{nome}</h1>
                    <h2>
                        {t('CRIADO_POR_EM', {
                            nome: criador.nome,
                            datacriacao,
                        })}
                    </h2>
                    <div className="List-HR" />
                    <div className="Activity-BG--Land">
                        <ListGroup>
                            {tarefas.map(tarefa => (
                                <LinkContainer
                                    to={`/activity/${tarefa.idtarefa}`}
                                >
                                    <ListGroup.Item>
                                        {tarefa.nome}
                                    </ListGroup.Item>
                                </LinkContainer>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Gincana);
