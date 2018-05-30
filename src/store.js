import Vue from 'vue'
import Vuex from 'vuex'
import api from './api/api'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        types: []
    },

    mutations: {
        fetchTypes(state, payload) {
            state.types = payload.types;
        }
    },

    getters: {
        getTypeBySlug: (state) => (slug) => {
            return state.types.find(type => {
                return type.slug === slug;
            });
        }
    },

    actions: {
        fetchTypes({ commit }) {
            api.types.index().then(res => commit('fetchTypes', { types: res.data }));
        }
    }
});

export default store;