import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { withTranslation } from 'react-i18next';

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

class QuizList extends Component<any, State> {
    constructor(Props: any) {
        super(Props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    private getQuestions() {
        fetch('https://ginquest-backend-dot-ginquest-app.appspot.com/quiz')
            .then(res => res.json())
            .then(
                result => {
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

    public componentDidMount() {
        this.getQuestions();
    }

    private deleteItem(e: any) {
        fetch(
            'https://ginquest-backend-dot-ginquest-app.appspot.com/quiz/' +
                e.target.name,
            {
                method: 'DELETE',
            }
        ).then(() => this.getQuestions());
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
        const { t } = this.props;
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
                    {t('Deletar')}
                </Button>
            </ListGroup>
        );
    }

    public render() {
        const { t } = this.props;
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <Container>
                    {t('Error')}: {error.message}
                </Container>
            );
        } else if (!isLoaded) {
            return <Container>{t('Loading...')}</Container>;
        } else {
            return (
                <Container key="teste">
                    {items.map(item => this.renderItem(item))}
                </Container>
            );
        }
    }
}

export default withTranslation()(QuizList);
