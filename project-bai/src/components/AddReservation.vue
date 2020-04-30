<template>
    <div>
        <h3>Add a reservation</h3>
        <div v-if="isConnected">
        <div class="add"> 
            <form @submit="onSubmit" action="https://vuejs.org/" method="post">  
                <span ><b>First Name:</b></span>
                <input type="text" v-model="reservation.name">
                <span><b>Pickup:</b></span>
                <select v-model="reservation.store">
                    <option disabled value="">Please choose:</option>
                    <option>Store Karmelicka</option>
                    <option>Store k.Gurgacza</option>
                </select>
                <span><b>Number of segways:</b></span>
                <input type="number" v-model="reservation.amount" min="1">
                <span><b>Comment:</b></span>
                <input type="text" v-model="reservation.comment" placeholder="Add a comment...">
                <input type="submit" value="Submit">
            </form>
        </div>
        </div>
        <div v-else>
                    <p class="lead">Please log in by faceook if you want to make reservation.</p>


        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: "AddReservation",
    props:{
        userName: String,
        isConnected:Boolean
    },
    data() {
        return {
            reservation: {
                name: '',
                store:'',
                amount: 0,
                comment: ''
            }
        }
    },
    watch:{
        'userName': function (){
            this.setName(this.userName)
        },
        'isConnected': function (){
            this.setName(this.userName)
        }
    },
    methods: {
        setName(userName){
            this.reservation.name = userName
        },
        ...mapActions(['addReservation']),
        onSubmit(e){
            e.preventDefault();
            this.addReservation(this.reservation);
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
.h3{
    text-decoration-color: red;
    color: red;
}

</style>