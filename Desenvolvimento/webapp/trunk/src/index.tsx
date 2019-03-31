import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './internationalization/i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faIgloo,
    faHome,
    faMapMarkerAlt,
    faCogs,
} from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);
library.add(faHome);
library.add(faMapMarkerAlt);
library.add(faCogs);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
