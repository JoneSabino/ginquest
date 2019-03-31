import { ginQuestAPI } from '../env.prod.json';

const seila = {
    async getTarefa(id: number) {
        const result = await fetch(`${ginQuestAPI}/tarefa/${id}`).then(
            response => response.json()
        );
        return result;
    },
    async getTarefaQuiz(id: number) {
        const result = await fetch(`${ginQuestAPI}/tarefa/${id}`);
        // @ts-ignore
        return result.data;
    },
    async getGincanas() {
        const result = await fetch(`${ginQuestAPI}/gincana`).then(response =>
            response.json()
        );
        return result;
    },
    async getGincana(id: string) {
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
                    idtarefa: 2,
                    idgincana: 1,
                    idtipotarefa: 2,
                    nome: 'Tarefa de Quiz',
                },
                {
                    idtarefa: 3,
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
            destination_lat: -23.554623,
            destination_lng: -46.905776,
            radius: 100,
        };
    },
};

export default seila;
