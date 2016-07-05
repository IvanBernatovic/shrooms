import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/ShroomForm.vue'

Vue.use(VueRouter)

var firebase = require("firebase/app");
require("firebase/database");

// Define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: Index
    },
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

router.start(App, '#app')

const BASE_URL = 'https://shrooms-67f1d.firebaseio.com/'

var config = {
    apiKey: "AIzaSyD4iV7pQelWivVOaLyXbLzB0FkOWZZeZFY",
    authDomain: "shrooms-67f1d.firebaseapp.com",
    databaseURL: "https://shrooms-67f1d.firebaseio.com",
    storageBucket: "shrooms-67f1d.appspot.com",
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var Mushrooms = database.ref().child('shrooms').on('value', (snapshot) => {
    console.log(snapshot.val())
})

console.log(Mushrooms)