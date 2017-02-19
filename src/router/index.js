import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import NotFound from 'components/NotFound'
import About from 'components/About'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Hello },
        { path: '/about', component: About},
        { path: '/404', component: NotFound},
        { path: '/*', redirect : '/404'},
    ]
});