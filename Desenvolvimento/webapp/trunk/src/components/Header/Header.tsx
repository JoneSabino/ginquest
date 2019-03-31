import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';
import MobileHeader from './MobileHeader/MobileHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

interface Props extends WithTranslation, RouteComponentProps {}

interface State {}

class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <MediaQuery maxDeviceWidth={1224}>
                    <MobileHeader />
                </MediaQuery>
                <MediaQuery minDeviceWidth={1225}>
                    <DesktopHeader />
                </MediaQuery>
            </div>
        );
    }
}

export default withRouter(withTranslation()(Header));
