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
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                self.$router.push({path: '/dashboard'});
                // ...
                }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        },
        logout : function(event){
            firebase.auth().signOut().then(function(){
                console.log('logged out');
            }, function(error){
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
