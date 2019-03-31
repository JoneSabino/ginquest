import i18n from 'i18next';
import ptBR from './pt-BR';
import enUS from './en-US';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en-US': enUS,
    'pt-BR': ptBR,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en-US',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
