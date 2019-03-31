import { ginQuestAPI } from '../env.dev.json';

const seila = {
    async getTarefa(id: number) {
        let result = await fetch(`${ginQuestAPI}/tarefa/${id}`).then(response =>
            response.json()
        );
        // @ts-ignore
        return result;
    },
    async getTarefaQuiz(id: number) {
        let result = await fetch(`${ginQuestAPI}/tarefa/${id}`);
        // @ts-ignore
        return result.data;
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
