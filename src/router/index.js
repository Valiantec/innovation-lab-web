import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import AboutUs from '../views/AboutUs.vue';
import JoinUs from '../views/JoinUs.vue';
import ContactUs from '../views/ContactUs.vue';
import Suggestion from '../views/Suggestion.vue';
import FormsView from '../views/FormsView.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        //     import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/join-us',
        name: 'JoinUs',
        component: JoinUs
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/suggestions',
        name: 'Suggestions',
        component: Suggestion
    },
    {
        path: '/forms',
        name: 'FormsView',
        component: FormsView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
