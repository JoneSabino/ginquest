import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { withTranslation, WithTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';

interface Props extends WithTranslation, Container {}

interface Item {
    quizid: number;
    pergunta: string;
    resposta1: string;
    resposta2: string;
    resposta3: string;
    resposta4: string;
    resposta5: string;
    [key: string]: string | number;
    correct: number;
}

interface State {
    error: any;
    isLoaded: boolean;
    items: Item[];
}

class QuizList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    private getQuestions(): void {
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

    private deleteItem(e: React.MouseEvent<HTMLButtonElement>): void {
        fetch(
            'https://ginquest-backend-dot-ginquest-app.appspot.com/quiz/' +
                e.currentTarget.name,
            {
                method: 'DELETE',
            }
        ).then(() => this.getQuestions());
    }

    private renderItem(item: Item): JSX.Element {
        const { t } = this.props;
        return (
            <ListGroup variant="flush" key={item.quizid}>
                <ListGroup.Item key={item.quizid}>
                    {item.quizid} - {item.pergunta}
                </ListGroup.Item>

                {[1, 2, 3, 4, 5].map((index: number) => (
                    <ListGroup.Item
                        key={index}
                        variant={item.correct === index ? 'success' : 'warning'}
                    >
                        {item[`resposta${index}`]}
                    </ListGroup.Item>
                ))}

                <Button
                    variant="danger"
                    name={item.quizid + ''}
                    onClick={this.deleteItem}
                >
                    {t('Deletar')}
                </Button>
            </ListGroup>
        );
    }

    public render(): JSX.Element {
        const { t } = this.props;
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <div>
                    {t('Error')}: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return <div>{t('Loading...')}</div>;
        } else {
            return (
                <div key="teste">
                    {items.map(item => this.renderItem(item))}
                </div>
            );
        }
    }
}

export default withTranslation()(QuizList);
