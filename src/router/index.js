import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import NotFound from 'components/NotFound'
import About from 'components/About'
import Login from 'components/Login'
import Dashboard from 'components/Dashboard'
import firebase from 'firebase'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Hello, beforeEnter : (to, from, next) => {
            firebase.auth().onAuthStateChanged(function(user){
                if(user){
                    next('/dashboard');
                }else{
                    next();
                }
            });            
        }},
        { path: '/about', component: About},
        { path: '/login', component: Login},
        { path: '/dashboard', component: Dashboard, beforeEnter : (to, from, next) => {
            firebase.auth().onAuthStateChanged(function(user){
                if(user){
                    next();
                }else{
                    next('/');
                }
            });
        }},
        { path: '/404', component: NotFound},
        { path: '/*', redirect : '/404'},
    ]
});