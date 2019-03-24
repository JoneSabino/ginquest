import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class QuizForm extends Component<Props, State> {
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

    private getPlaceHolder(text: string | object): string {
        if (typeof text === 'string') {
            return text;
        }
        return JSON.stringify(text);
    }

    public render() {
        const { t } = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formQuestion">
                    <Form.Label>{t('Question')}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={this.getPlaceHolder(
                            t('Enter the question')
                        )}
                        name="pergunta"
                        onChange={this.changeHandler}
                    />
                </Form.Group>

                <Form.Group controlId="formAnswers">
                    {[1, 2, 3, 4, 5].map((index: number) => (
                        <Form.Control
                            key={index}
                            type="text"
                            placeholder={this.getPlaceHolder(
                                t(`Resposta${index}`)
                            )}
                            name={`resposta${index}`}
                            onChange={(e: any) => this.changeHandler(e)}
                        />
                    ))}
                </Form.Group>

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

export default withTranslation()(QuizForm);
