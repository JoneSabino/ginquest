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
        const result = await fetch(`${ginQuestAPI}/gincanas`).then(response =>
            response.json()
        );
        return result;
    },
    async getGincana(id: string) {
        const result = await fetch(`${ginQuestAPI}/gincana/${id}`).then(
            response => response.json()
        );
        return result;
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
