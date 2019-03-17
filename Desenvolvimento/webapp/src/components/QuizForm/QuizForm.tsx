import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface Props {}

interface State {}

class QuizForm extends Component<Props, State> {
    constructor(Props: any, State: any) {
        super(Props, State);
        this.changeHandler.bind(this);
        this.handleSubmit.bind(this);
    }

    private changeHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
        console.log(this.state);
    };

    private handleSubmit(event: any) {
        event.preventDefault();
        fetch('https://ginquest-backend-dot-ginquest-app.appspot.com/quiz', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        }).then(() => <Redirect to="/quiz/" push />);
    }

    public render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group controlId="formQuestion">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the question"
                        name="pergunta"
                        onChange={(e: any) => this.changeHandler(e)}
                    />
                </Form.Group>

                <Form.Group controlId="formAnswers">
                    <Form.Control
                        type="text"
                        placeholder="Resposta1"
                        name="resposta1"
                        onChange={(e: any) => this.changeHandler(e)}
                    />
                    <Form.Control
                        type="text"
                        placeholder="Resposta2"
                        name="resposta2"
                        onChange={(e: any) => this.changeHandler(e)}
                    />
                    <Form.Control
                        type="text"
                        placeholder="Resposta3"
                        name="resposta3"
                        onChange={(e: any) => this.changeHandler(e)}
                    />
                    <Form.Control
                        type="text"
                        placeholder="Resposta4"
                        name="resposta4"
                        onChange={(e: any) => this.changeHandler(e)}
                    />
                    <Form.Control
                        type="text"
                        placeholder="Resposta5"
                        name="resposta5"
                        onChange={(e: any) => this.changeHandler(e)}
                    />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Resposta Correta</Form.Label>
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
                    Submit
                </Button>
            </Form>
        );
    }
}

export default QuizForm;
