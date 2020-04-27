<template>
  <div id="app">
    <Header/>
    <FacebookUser/>
    <Map/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FacebookUser from './components/FacebookUser';
import Map from './components/Map';
export default {
  name: 'App',
  components: {
    Header,
    Map,
    Footer,
    FacebookUser
  },data(){
    return{
    loggedIn: false,
    name: "User"
    }
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
