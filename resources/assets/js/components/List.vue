<template>
    <div class="row">
        <div class="col-md-4" v-for="mushroom in mushrooms">
            <div class="card card-inverse" v-bind:class="successOrErrorClass(mushroom.result)">
                <div class="card-block">
                    <h5>{{ mushroom.name }} - </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .card {
        color: white;
    }
</style>

<script>
    var valueTransformer = {
        "capShape": {
            "b": "Bell",
            "c": "Conical",
            "x": "Convex",
            "f": "Flat",
            "k": "Knobbed",
            "s": "Sunken"
        },
        "capSurface": {

        },
        "capColor": {

        },
        "bruises": {

        },
        "odor": {

        },
        "gillAttachment": {

        },
        "gillSpacing": {

        },
        "gillSize": {

        },
        "gillColor": {

        },
        "stalkShape": {

        },
        "stalkRoot": {

        },
        "stalkSurfaceAboveRing": {

        },
        "stalkSurfaceBelowRing": {

        },
        "stalkColorAboveRing": {

        },
        "stalkColorBelowRing": {

        },
        "veilType": {

        },
        "veilColor": {

        },
        "ringNumber": {

        },
        "ringType": {

        },
        "sporePrintColor": {

        },
        "population": {

        },
        "habitat": {

        },
        "name": {

        },
        "result": {

        }
    }

    export default{
        init(){
            var self = this
            this.$http.get('http://shrooms-api.app/api/v1/mushrooms').then((response) => {
                self.mushrooms = response.data.mushrooms;
            }, (response) => {
                console.log("Error");
            });
        },
        data(){
            return{
                mushrooms: []
            }
        },
        methods: {
            successOrErrorClass(result){
                console.log(result)
                if(result == 'e'){
                    return {
                        'card-success': true
                    }
                } else {
                    return {
                        'card-danger': true
                    }
                }
            }
        },
        components: {

        }
    }
</script>
