<template>
  <div id="app">
    <Header/>
    <FacebookUser/>
    <Weather/>
    <Map/>
    <AddReservation/>
    <Reservations/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';
import FacebookUser from './components/FacebookUser';
import Map from './components/Map';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import Weather from './components/Weather';

export default {
  name: 'App',
  components: {
    Header,
    Weather,
    Map,
    FacebookUser,
    AddReservation,
    Reservations,
    Contact,
    Footer
  },data(){
    return{
    loggedIn: false,
    name: "User"
    }
  },
  methods(){
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
