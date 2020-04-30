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
        const response  = await axios.get('https://projectbai-92dd.restdb.io/rest/reservations?apikey=');
        //https://cors-anywhere.herokuapp.com/
        console.log(response.data);
        var startData = {
            res: [],
            availablity: {
                karmelicka: 21,
                gurgacza: 23
            }
        };
        for(const i in response.data){
            startData.res.push(response.data[i].reservation)
        }
        for(var i in response.data){
        console.log(response.data[i].reservation);
        if(response.data[i].reservation.store == 'Store Karmelicka'){
            startData.availablity.karmelicka = startData.availablity.karmelicka - response.data[i].reservation.amount;
            console.log(startData.availablity.karmelicka);
        }else if(response.data[i].reservation.store == 'Store k.Gurgacza'){
            startData.availablity.gurgacza = startData.availablity.gurgacza - response.data[i].reservation.amount;
            console.log(startData.availablity.gurgacza);
            }
        }
        console.log('inside fetchreser');
        commit('setReservations', startData);
    },
    async addReservation({commit}, reservation){
        const response = await axios.post('https://projectbai-92dd.restdb.io/rest/reservations?apikey=', {reservation});
        //console.log(response.data.reservation);
        commit('newReservation', response.data.reservation);
    }
};

const mutations = {
    setReservations: (state, reservations) => {
                                            state.reservations = reservations.res;
                                            state.availablity = reservations.availablity},
    newReservation: (state, reservation) => state.reservations.unshift(reservation)
};

export default {
    state,
    getters,
    actions,
    mutations
};