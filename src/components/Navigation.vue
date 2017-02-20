<template>
<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/">Squares</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/about">About <span class="sr-only">(current)</span></router-link>
            </li>
        </ul>
        <div class="navbar-nav nav-item">
            <div class="nav-link u-pointer" v-if="loggedIn" v-on:click="logout">Logout</div>
            <div class="nav-link u-pointer" v-else v-on:click="login">Login</div>
        </div>
    </div>
</nav>
</template>

<script>
var firebase = require('firebase');
var provider = new firebase.auth.GoogleAuthProvider();

export default {
    name: 'navigation',
    data () {
        return {
            loggedIn : false,
            user : null
        }
    },
    created () {
        this.fetchData();
    },
    watch:{
        '$route' : 'fetchData'
    },
    methods : {
        fetchData () {
            var self = this;
            firebase.auth().onAuthStateChanged(function(user){
                if(user){
                    self.loggedIn = true;
                    self.user = user;
                }else{
                    self.loggedIn = false;
                    self.user = null;
                }
            });
        },
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

<style scoped>
.u-pointer {
    cursor : pointer;
}
</style>
