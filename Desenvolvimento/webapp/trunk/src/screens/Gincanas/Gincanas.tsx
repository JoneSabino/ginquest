import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteChildrenProps } from 'react-router';
import apiService from '../../api/ginQuest';
import { ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
            <ListGroup>
                Gincanas
                {this.state.gincanas.map(gincana => (
                    <LinkContainer to={`/gincana/${gincana.idgincana}`}>
                        <ListGroup.Item>{gincana.nome}</ListGroup.Item>
                    </LinkContainer>
                ))}
            </ListGroup>
        );
    }
}

export default withTranslation()(Gincanas);
