import axios from 'axios';

const client = axios.create({
    baseURL: 'http://127.0.0.1:3000/api'
});

const api = {
    types: {
        index() {
            return client.get('/types');
        },

        show(type) {
            return client.get(`/types/${type}/meta`);
        },

        items(type) {
            return client.get(`/types/${type}`);
        }
    }
};

export default api;