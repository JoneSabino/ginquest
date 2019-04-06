import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router';
import apiService from '../../api/ginQuest';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Gincanas.css';

interface Props extends RouteChildrenProps, WithTranslation {}

interface State {
    gincanas: Array<{
        idgincana: number;
        nome: string;
        criador: number;
    }>;
}

class Gincanas extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            gincanas: [],
        };
    }

    public async componentDidMount() {
        const gincanas = await apiService.getGincanas();
        this.setState({ gincanas });
    }

    public render() {
        const { t } = this.props;
        return (
            <div className="List">
                <div className="container">
                    <h1>Lista de Gincanas</h1>
                    <div className="List-HR" />

                    <div className="Activity-BG--Land">
                        <ListGroup>
                            {this.state.gincanas.map(gincana => (
                                <LinkContainer
                                    to={`/gincana/${gincana.idgincana}`}
                                >
                                    <ListGroup.Item>
                                        {gincana.nome}
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

export default withTranslation()(Gincanas);
