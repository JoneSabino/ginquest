import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withTranslation, WithTranslation } from 'react-i18next';
import { FormControl } from 'react-bootstrap';

interface Props {
    //history: any;
    t: (text: string) => string;
}

interface State {}

class QuizForm extends Component<any, State> {
    constructor(props: Props) {
        super(props);
        this.state = { correct: 1 };
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
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formQuestion">
                    <Form.Label>{t('Question')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={t('Enter the question')}
                        name="pergunta"
                        onChange={this.changeHandler}
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
        );
    }
}

export default withTranslation()(QuizForm);
