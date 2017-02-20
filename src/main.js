// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import App from './App'
import router from './router'
import Navigation from './components/Navigation'

//Setup Firebase
var config = {
    name: 'squares',
    apiKey: "AIzaSyASCvASbYbzaM8lNSL36ftBEFX-2X9VBm0",
    authDomain: "squares-5d66a.firebaseapp.com",
    databaseURL: "https://squares-5d66a.firebaseio.com",
    storageBucket: "squares-5d66a.appspot.com",
    messagingSenderId: "146851113786"
}
firebase.initializeApp(config)

Vue.use(VueFire);

Vue.component('navigation', Navigation);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
