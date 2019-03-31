import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../internationalization/i18n';

export default class InternationalizationWrapper extends Component {
    public render() {
        return (
            <I18nextProvider i18n={i18n}>{this.props.children}</I18nextProvider>
        );
    }
}
