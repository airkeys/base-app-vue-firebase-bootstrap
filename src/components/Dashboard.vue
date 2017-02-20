<template>
    <div class="dashboard">
        <h1>{{ msg }}</h1>
        <h2>{{ uid }}</h2>
        <h2>{{ name[".value"] }}</h2>
    </div>
</template>

<script>
import firebase from 'firebase'

//Setup Firebase
var config = {
    name: 'squares',
    apiKey: "AIzaSyASCvASbYbzaM8lNSL36ftBEFX-2X9VBm0",
    authDomain: "squares-5d66a.firebaseapp.com",
    databaseURL: "https://squares-5d66a.firebaseio.com",
    storageBucket: "squares-5d66a.appspot.com",
    messagingSenderId: "146851113786"
}

var db = firebase.initializeApp(config).database();

export default {
    name: 'dashboard',
    data () {
        return {
            msg: 'This is your dashboard',
            uid: null
        }
    },
    firebase : {
        name : {
            source : db.ref('users/'+this.uid+'/displayName'),
            asObject : true
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
                    self.uid = user.uid;
                }else{
                    self.uid = 'error';
                }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
