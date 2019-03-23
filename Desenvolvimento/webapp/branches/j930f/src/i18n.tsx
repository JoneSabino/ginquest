import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en-US': {
        translation: {
            'Welcome to React': 'Welcome to React and react-i18next!!!',
            Home: 'Home',
            'Language Select': 'Language Select',
            Edit: 'Edit',
            'and save to reload': 'and save to reload',
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
        },
    },
    'pt-BR': {
        translation: {
            'Welcome to React': 'Bem vindo ao React e ao react-i18next!!!',
            Home: 'Início',
            'Language Select': 'Selecionar Idioma',
            Edit: 'Editar',
            'and save to reload': 'e salve para recarregar',
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
