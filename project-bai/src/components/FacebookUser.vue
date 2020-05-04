
<template>

  <div id="facebookUser">
    <facebook-login class="button"
      appId="657623535072697"
      @login="onLogin"
      @logout="onLogout"
      @get-initial-status="getUserData"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
    <div v-if="isConnected" class="information">
      <h1>Hi {{name}}! You are logged in.</h1>
      <div class="well">
        <div class="list-item">
          <img :src="picture">
        </div>
        <div class="list-item">
          <i>{{name}}</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import facebookLogin from 'facebook-login-vuejs';

    export default {
    name: "FacebookUser",
    components:{
        facebookLogin
    },
    data() {
    return {
    isConnected: false,
    name: '',
    email: '',
    personalID: '',
    picture: '',
    FB: undefined
    }
    },
    methods: {
    getUserData() {
    this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
        user => {
        this.personalID = user.id;
        this.email = user.email;
        this.name = user.name;
        this.picture = user.picture.data.url;
        var isAdm = this.isAdmin(this.email)
        var arr = [this.personalID,this.email,this.name,this.isConnected,isAdm]
        this.$emit('setLoginData', arr)
        }
    )
    },
    sdkLoaded(payload) {
    this.isConnected = payload.isConnected
    this.FB = payload.FB
    if (this.isConnected) this.getUserData()
    },
    onLogin() {
    this.isConnected = true
    this.getUserData()
    },
    onLogout() {
    this.isConnected = false;
    var arr = [this.personalID,this.email,this.name,this.isConnected,false]
    this.$emit('setLoginData', arr)
    },
    isAdmin(email){
        if(email==="sucharek7@gmail.com" || email==="dominikwozniczka96@gmail.com" || email===""){
            return true
        }
        return false
    }
    }}
</script>

<style >
.information {
  margin: auto;
  display: flex;
  flex-direction: column;
}
.well {
  background-color:#3b5998;
  margin: auto;
  /* display:inline-block; */
}
.login {
  margin: auto;
}
.list-item:first-child {
  margin: 0;
}
.list-item {
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 20px;
}
.button {
  margin: auto;
}
</style>