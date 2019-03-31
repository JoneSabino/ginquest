import { ginQuestAPI } from '../env.json';

const seila = {
    async getTarefa(id: number) {
        return {
            idtarefa: 1,
            idgincana: 1,
            idtipotarefa: 1,
            nome: 'Tarefa de desafio',
        };
    },
    getTarefaQuiz(id: number) {
        return {
            id,
            qrcode: 'http://en.m.wikipedia.org',
            description: 'Para completar essa tarefa leia um qrcode',
            image:
                'http://s2.glbimg.com/ghFXiTWz85oCFk-SHWci8rrMz44=/e.glbimg.com/og/ed/f/original/2016/05/02/y3hp4en.jpg',
        };
    },
    async getGincanas() {
        return [
            { idgincana: 1, nome: 'Uma gincana', criador: 1 },
            { idgincana: 2, nome: 'Outra gincana', criador: 1 },
            { idgincana: 3, nome: 'Dois gincana', criador: 1 },
            { idgincana: 4, nome: 'Ora pois gincana', criador: 1 },
        ];
    },
    async getGincana(id: number) {
        return {
            idgincana: 1,
            nome: 'Uma gincana',
            criador: {
                idusuario: 1,
                nome: 'Zézinho',
            },
            tarefas: [
                {
                    idtarefa: 1,
                    idgincana: 1,
                    idtipotarefa: 1,
                    nome: 'Tarefa de desafio',
                },
                {
                    idtarefa: 1,
                    idgincana: 1,
                    idtipotarefa: 2,
                    nome: 'Tarefa de Quiz',
                },
                {
                    idtarefa: 1,
                    idgincana: 1,
                    idtipotarefa: 3,
                    nome: 'Tarefa de Localização',
                },
            ],
        };
    },
    getLocationActivityData(id: number) {
        return {
            id,
            destination: {
                lat: -23.554623,
                lng: -46.905776,
            },
            radius: 100,
        };
    },
};

export default seila;
