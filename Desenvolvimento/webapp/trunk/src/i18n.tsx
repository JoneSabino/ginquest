import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en-US': {
        translation: {
            Home: 'Home',
            'Language Select': 'Language Select',
            Edit: 'Edit',
            'Gincana Braba': 'Angry Gincana',
            'Loading...': 'Loading...',
            Error: 'Error',
            Deletar: 'Delete',
            Question: 'Question',
            'Enter the question': 'Enter the question',
            Resposta1: 'Answer1',
            Resposta2: 'Answer2',
            Resposta3: 'Answer3',
            Resposta4: 'Answer4',
            Resposta5: 'Answer5',
            'Resposta Correta': 'Right answer',
            Submit: 'Submit',
            List: 'List',
            Create: 'Create',
            Location: 'Location',
            'Location.LocationNotFound': 'Location not found',
            'Location.RouteNotFound': 'Route not found',
            'Location.SubmitButton': 'Submit Location',
        },
    },
    'pt-BR': {
        translation: {
            Home: 'Início',
            'Language Select': 'Selecionar Idioma',
            Edit: 'Editar',
            'Gincana Braba': 'Gincana Braba',
            'Loading...': 'Carregando...',
            Error: 'Erro',
            Deletar: 'Deletar',
            Question: 'Pergunta',
            'Enter the question': 'Digite a pergunta',
            Resposta1: 'Resposta1',
            Resposta2: 'Resposta2',
            Resposta3: 'Resposta3',
            Resposta4: 'Resposta4',
            Resposta5: 'Resposta5',
            'Resposta Correta': 'Resposta Correta',
            Submit: 'Enviar',
            List: 'Lista',
            Create: 'Criar',
            Location: 'Localização',
            'Location.LocationNotFound': 'Localização não encontrada',
            'Location.RouteNotFound': 'Rota não encontrada',
            'Location.SubmitButton': 'Enviar Localização',
        },
    },
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
