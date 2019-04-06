import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { SwitchProps } from 'react-router';

interface Props extends SwitchProps {}

interface State {}

export default class BodyContainer extends Component<Props, State> {
    public render() {
        return <Container fluid>{this.props.children}</Container>;
    }
}
