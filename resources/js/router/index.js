import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Login from "../pages/LoginPage.vue";
import NotFound from "../pages/NotFoundPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",

    routes: [
        {
            path: "/",

            component: Home,
        },

        {
            path: "/about",

            component: About,
        },
        {
            path: "/login",

            component: Login,
        },

        {
            path: "*",
            component: NotFound,
        },
    ],
});
