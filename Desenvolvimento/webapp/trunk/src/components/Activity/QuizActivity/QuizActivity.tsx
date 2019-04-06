import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter,
    RouterChildContext,
} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './QuizActivity.css';
import { WithTranslation, withTranslation } from 'react-i18next';

interface Props extends WithTranslation {
    idtarefa: number;
    idtipotarefa: number;
    nome: string;
    pergunta: string;
    resposta1: string;
    resposta2: string;
    resposta3: string;
    resposta4: string;
    resposta5: string;
    [key: string]: any;
    correct: number;
}

interface State {}

class QuizActivity extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private changeHandler = (event: any) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        this.setState({
            [name]: value,
        });
    };

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('submit');
    }

    private getPlaceHolder(text: string | object): string {
        if (typeof text === 'string') {
            return text;
        }
        return JSON.stringify(text);
    }

    public render() {
        const props = this.props;
        const { t } = props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <ListGroup.Item key={props.quizid}>
                    {props.idtarefa} - {props.pergunta}
                </ListGroup.Item>

                {[1, 2, 3, 4, 5].map((index: number) => (
                    <ListGroup.Item
                        key={index}
                        variant={
                            props.correct === index ? 'success' : 'warning'
                        }
                    >
                        {props[`resposta${index}`]}
                    </ListGroup.Item>
                ))}

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>{t('Resposta Correta')}</Form.Label>
                    <Form.Control
                        as="select"
                        name="correct"
                        onChange={(e: any) => this.changeHandler(e)}
                    >
                        {[1, 2, 3, 4, 5].map((index: number) => (
                            <option key={index} value={index}>
                                {index}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    {t('Submit')}
                </Button>
            </Form>
        );
    }
}

export default withTranslation()(QuizActivity);
