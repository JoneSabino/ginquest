import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Redirect } from 'react-router';
import { withTranslation } from 'react-i18next';

interface Props {
    history: any;
}

interface State {}

class QuizForm extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = { correct: 1 };
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private changeHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    };

    private handleSubmit(event: any) {
        event.preventDefault();
        fetch('https://ginquest-backend-dot-ginquest-app.appspot.com/quiz', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        }).then(() => {
            this.props.history.push('/quiz');
        });
    }

    public render() {
        const { t } = this.props;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formQuestion">
                        <Form.Label>{t('Question')}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={t('Enter the question')}
                            name="pergunta"
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formAnswers">
                        <Form.Control
                            type="text"
                            placeholder={t('Resposta1')}
                            name="resposta1"
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder={t('Resposta2')}
                            name="resposta2"
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder={t('Resposta3')}
                            name="resposta3"
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder={t('Resposta4')}
                            name="resposta4"
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                        <Form.Control
                            type="text"
                            placeholder={t('Resposta5')}
                            name="resposta5"
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>{t('Resposta Correta')}</Form.Label>
                        <Form.Control
                            as="select"
                            name="correct"
                            onChange={(e: any) => this.changeHandler(e)}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        {t('Submit')}
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default withTranslation()(QuizForm);
