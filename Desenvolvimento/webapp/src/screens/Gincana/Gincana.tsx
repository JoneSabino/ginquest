import React, { Component } from 'react';
import './Gincana.css';
import { withTranslation } from 'react-i18next';

class Gincana extends Component<any, any> {
    public render() {
        const { t } = this.props;
        return (
            <div>
                <h1>{t('Gincana Braba')}</h1>
            </div>
        );
    }
}

export default withTranslation()(Gincana);
