import axios from 'axios';

const state = {
    reservations: []
};

const getters = {
    allReservations: (state) => state.reservations
};

const actions = {
    async fetchReservations({commit}){
        var response  = await axios.get('https://projectbai-92dd.restdb.io/rest/reservations?apikey=');
        //https://cors-anywhere.herokuapp.com/
        console.log(response.data);
        var startData = [];
        for(const i in response.data){
            startData.push(response.data[i].reservation)
        }
        commit('setReservations', startData);
    },
    async addReservation({commit}, reservation){
        const response = await axios.post('https://projectbai-92dd.restdb.io/rest/reservations?apikey=', {reservation});
        console.log(response.data.reservation);
        commit('newReservation', response.data.reservation);
    }
};

const mutations = {
    setReservations: (state, reservations) => (state.reservations = reservations),
    newReservation: (state, reservation) => state.reservations.unshift(reservation)
};

export default {
    state,
    getters,
    actions,
    mutations
};