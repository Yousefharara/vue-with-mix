// console.log("Vue app loaded");
// require('./bootstrap');

// // window.Vue = require('vue');
// window.Vue = require('vue/dist/vue.js');



// Vue.component(
//     'example-component',
//     require('./components/Example.vue').default
// );

// const app = new Vue({
//     el: '#app',
// });


import Vue from "vue";

import App from "./App.vue";

import router from "./router/index.js";

new Vue({

    router,

    render:h=>h(App)

}).$mount("#app");