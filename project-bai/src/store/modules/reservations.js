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
            if((startData.availablity.karmelicka - response.data[i].reservation.amount) >= 0){
                startData.availablity.karmelicka = startData.availablity.karmelicka - response.data[i].reservation.amount;
            }else if((startData.availablity.karmelicka - response.data[i].reservation.amount) < 0){
                startData.availablity.karmelicka = 0;
            }
        }else if(response.data[i].reservation.store == 'Store k.Gurgacza'){
                if((startData.availablity.gurgacza - response.data[i].reservation.amount) >= 0){
                    startData.availablity.gurgacza = startData.availablity.gurgacza - response.data[i].reservation.amount;
                }else if((startData.availablity.gurgacza - response.data[i].reservation.amount) < 0){
                    startData.availablity.gurgacza = 0;
                }
            }
        }
        console.log('inside fetchreser');
        commit('setReservations', startData);
    },
    async addReservation({commit}, reservation){
        const response = await axios.post('https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9', {reservation});
        //console.log(response.data.reservation);
        commit('newReservation', response.data.reservation);
    },
    async removeReservation({commit}, reservation){
        const response = await axios.post('https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9', {reservation});
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