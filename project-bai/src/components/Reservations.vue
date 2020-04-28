<template>
    <div>
        <h3>Reservations</h3>
        <div class="reservations"> 
            <div v-for="reservation in allReservations" :key="reservation.id" class="reservation"> 
                {{reservation.name}}, {{reservation.store}}: {{reservation.amount}} Segways
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "Reservations",
    methods: {
        ...mapActions(['fetchReservations', 'calculateReservation'])
    },
    computed: mapGetters(['allReservations']),
    created() {
        this.fetchReservations();
        this.calculateReservation();
    }
};
</script>

<style scoped>
    .reservations {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .reservation {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>