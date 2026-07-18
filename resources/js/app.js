console.log("Vue app loaded");
require('./bootstrap');

window.Vue = require('vue');
// window.Vue = require('vue/dist/vue.js');



Vue.component(
    'example-component',
    require('./components/Example.vue').default
);

const app = new Vue({
    el: '#app',
});