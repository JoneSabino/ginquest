import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
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
        ).then(() => this.forceUpdate());
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
            <ul>
                <Button
                    variant="danger"
                    name={item.quizid + ''}
                    onClick={this.deleteItem.bind(this)}
                >
                    Deletar
                </Button>
                {item.quizid} - {item.pergunta}
                <li key={item.quizid + 1}>{item.resposta1}</li>
                <li key={item.quizid + 2}>{item.resposta2}</li>
                <li key={item.quizid + 3}>{item.resposta3}</li>
                <li key={item.quizid + 4}>{item.resposta4}</li>
                <li key={item.quizid + 5}>{item.resposta5}</li>
            </ul>
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
