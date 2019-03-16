import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

interface Props {}

interface State {
    error: any;
    isLoaded: boolean;
    items: Array<{
        quizid: number;
        pergunta: string;
        resposta1: string;
        resposta2: string;
        resposta3: string;
        resposta4: string;
        resposta5: string;
        correct: number;
    }>;
}

class QuizList extends Component<Props, State> {
    constructor(Props: any) {
        super(Props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch('https://ginquest-backend-dot-ginquest-app.appspot.com/quiz')
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.rows,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                error => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    private deleteItem(e: any) {
        fetch(
            'https://ginquest-backend-dot-ginquest-app.appspot.com/quiz/' +
                e.target.name,
            {
                method: 'DELETE',
            }
        ).then(() => {
            fetch('https://ginquest-backend-dot-ginquest-app.appspot.com/quiz')
                .then(res => res.json())
                .then(
                    result => {
                        console.log(result);
                        this.setState({
                            isLoaded: true,
                            items: result.rows,
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    error => {
                        this.setState({
                            isLoaded: true,
                            error,
                        });
                    }
                );
        });
    }

    private renderItem(item: {
        quizid: number;
        pergunta: string;
        resposta1: string;
        resposta2: string;
        resposta3: string;
        resposta4: string;
        resposta5: string;
        correct: number;
    }) {
        return (
            <ListGroup variant="flush" key={item.quizid}>
                <ListGroup.Item key={item.quizid}>
                    {item.quizid} - {item.pergunta}
                </ListGroup.Item>
                <ListGroup.Item
                    variant={item.correct == 1 ? 'success' : 'warning'}
                >
                    {item.resposta1}
                </ListGroup.Item>
                <ListGroup.Item
                    variant={item.correct == 2 ? 'success' : 'warning'}
                >
                    {item.resposta2}
                </ListGroup.Item>
                <ListGroup.Item
                    variant={item.correct == 3 ? 'success' : 'warning'}
                >
                    {item.resposta3}
                </ListGroup.Item>
                <ListGroup.Item
                    variant={item.correct == 4 ? 'success' : 'warning'}
                >
                    {item.resposta4}
                </ListGroup.Item>
                <ListGroup.Item
                    variant={item.correct == 5 ? 'success' : 'warning'}
                >
                    {item.resposta5}
                </ListGroup.Item>
                <Button
                    variant="danger"
                    name={item.quizid + ''}
                    onClick={this.deleteItem.bind(this)}
                >
                    Deletar
                </Button>
            </ListGroup>
        );
    }

    public render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div key="teste">
                    {items.map(item => this.renderItem(item))}
                </div>
            );
        }
    }
}

export default QuizList;
