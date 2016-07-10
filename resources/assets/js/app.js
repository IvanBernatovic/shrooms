import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import _ from 'underscore'


Vue.use(VueResource)
Vue.use(VueRouter)

import Index from './components/Form.vue'
import List from './components/List.vue'

var App = Vue.extend({})

var router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: Index
    },
    'list': {
        name: "list",
        component: List
    },
})

router.start(App, '#app')


/*
$( "#shroomForm" ).on("submit", function( event ) {
    event.preventDefault();
    var self = $( this )
    var inputs = self.serializeArray()
    var inputNames = _.pluck(inputs, "name")
    var inputValues = _.pluck(inputs, "value")
    console.log(inputNames)
    console.log(inputValues)
    console.log(self.serialize())

    $.post({
        url: "http://shrooms-api.app/api/v1/mushrooms",
        type: "POST",
        data: self.serialize(),
        success: function(data) {
            console.log("success")
        },
        error: function() {
            console.log("error")
        }
    });

    /!*$.post({
        url: self.attr("action"),
        type: "POST",
        headers: {
            //"Authorization": "Bearer Yl4cUQUWRQfUgDfPP2ehUViWopaO9asYx+ed0sLBIxJvXKNQoaZimRs/w2lTe0o46ClCLsCX63znF8GOZ1K2Vg==",
            "Content-Type": "application/json"
        },
        beforeSend: function (xhr){
            xhr.setRequestHeader('Authorization',
                "Bearer Yl4cUQUWRQfUgDfPP2ehUViWopaO9asYx+ed0sLBIxJvXKNQoaZimRs/w2lTe0o46ClCLsCX63znF8GOZ1K2Vg==");
        },
        data: {
            "Inputs": {
                "input1": {
                    "ColumnNames": inputNames,
                    "Values": [
                        inputValues
                    ]
                }
            },
            "GlobalParameters": {}
        },
        success: function(data) {
            console.log("success")
        },
        error: function() {
            console.log("error")
        }
    });*!/
});*/
