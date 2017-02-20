<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button class="nav-link" v-on:click="login">Login</button>
        <button class="nav-link" v-on:click="logout">Logout</button>
    </div>
</template>

<script>
var firebase = require('firebase');
var provider = new firebase.auth.GoogleAuthProvider();

export default {
    name: 'hello',
    data () {
        return {
            msg: 'Login page'
        }
    },
    methods: {
        login : function(event){
            var self = this;
            firebase.auth().signInWithPopup(provider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                self.$router.push({path: '/dashboard'});
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        },
        logout : function(event){
            firebase.auth().signOut().then(function(){
            }, function(error){
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
