import axios from 'axios';

const client = axios.create({
    baseURL: '/api'
});

const mock = {
    content: {
        index() {
            const data = [
                { title: 'Type 1', slug: 'type1' },
                { title: 'Type 2', slug: 'type2' },
                { title: 'Type 3', slug: 'type3' },
                { title: 'Type 4', slug: 'type4' },
            ];

            return new Promise((resolve, reject) => setTimeout(resolve, 100, data));
        },

        list(type) {
            const data = [
                { item: 'item1' },
                { item: 'item2' },
                { item: 'item3' },
                { item: 'item4' },
            ];

            return new Promise((resolve, reject) => setTimeout(resolve, 100, data));
        }
    }
};

export default mock;