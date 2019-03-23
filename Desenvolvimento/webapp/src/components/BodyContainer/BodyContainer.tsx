import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { SwitchProps } from 'react-router';

interface Props extends SwitchProps {}

interface State {}

export default class BodyContainer extends Component<Props, State> {
    render() {
        return <Container>{this.props.children}</Container>;
    }
}
