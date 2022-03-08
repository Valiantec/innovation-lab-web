import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import JoinUsView from '../views/JoinUsView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import SuggestionView from '../views/SuggestionView.vue';
import FormsView from '../views/FormsView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUsView
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        //     import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/join-us',
        name: 'JoinUs',
        component: JoinUsView
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUsView
    },
    {
        path: '/suggestions',
        name: 'Suggestions',
        component: SuggestionView
    },
    {
        path: '/forms',
        name: 'FormsView',
        component: FormsView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
