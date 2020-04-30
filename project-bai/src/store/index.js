import Vuex from 'vuex';
import Vue from 'vue';
import reservations from './modules/reservations';

//Load Vuex
Vue.use(Vuex);

//Create a store
export default new Vuex.Store({
    modules: {
        reservations
    }
});