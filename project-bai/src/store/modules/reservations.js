import axios from 'axios';

const state = {
    reservations: []
};

const getters = {
    allReservations: (state) => state.reservations
};

const actions = {
    async fetchReservations({commit}){
        //const response  = await axios.get('https://cors-anywhere.herokuapp.com/https://projectbai-92dd.restdb.io/rest/reservations?apikey=');
        const startData = [
            {
              "name": "Jan",
              "store": "Store number 1",
              "amount": "5",
              "comment": "test"
            },
            {
                "name": "Anna",
                "store": "Store number 1",
                "amount": "1",
                "comment": "test"
            }
        ];
        commit('setReservations', startData);
    },
    async addReservation({commit}, reservation){
        const response = await axios.post('https://cors-anywhere.herokuapp.com/https://projectbai-92dd.restdb.io/rest/reservations?apikey=', {reservation});
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