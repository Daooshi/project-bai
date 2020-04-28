import axios from 'axios';

const state = {
    reservations: [],
    availablity: {}
};

const getters = {
    allReservations: (state) => state.reservations,
    allAvailability: (state) => state.availablity
};

const actions = {
    async fetchReservations({commit}){
        const response  = await axios.get('https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9');
        //https://cors-anywhere.herokuapp.com/
        //console.log(response.data);
        var startData = [];
        for(const i in response.data){
            startData.push(response.data[i].reservation)
        }
        commit('setReservations', startData);
    },
    async addReservation({commit}, reservation){
        const response = await axios.post('https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9', {reservation});
        //console.log(response.data.reservation);
        commit('newReservation', response.data.reservation);
    },
    async calculateReservation({commit}) {
        const response  = await axios.get('https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9');
        console.log(response.data);
        //console.log(response.data[0].reservation);
        var data = {
            karmelicka: 22,
            gurgacza: 19
        };
        // for(var i = 0; i <= response.data.length; i++){
        //     //console.log(response.data[i].reservation);
        //     if(response.data[i].reservation.store == 'Store Karmelicka'){
        //         data.karmelicka = data.karmelicka - response.data[i].reservation.amount;
        //         //console.log(data.karmelicka);
        //     }else if(response.data[i].reservation.store == 'Store k.Gurgacza'){
        //         data.gurgacza = data.gurgacza - response.data[i].reservation.amount;
        //         // console.log(data.gurgacza);
        //     }
        // }
        console.log('data');
        console.log(data);
        commit('setAvailability', data);
    }
};

const mutations = {
    setReservations: (state, reservations) => (state.reservations = reservations),
    setAvailability: (state, availablity) => (state.availablity = availablity),
    newReservation: (state, reservation) => state.reservations.unshift(reservation)
};

export default {
    state,
    getters,
    actions,
    mutations
};