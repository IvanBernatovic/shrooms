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
            "f":"fibrous",
            "g": "grooves",
            "y": "scaly",
            "s": "smooth"
        },
        "capColor": {
            "n": "brown",
            "b": "buff",
            "c": "cinnamon",
            "g": "gray",
            "r": "green",
            "p": "pink",
            "u": "purple",
            "e": "red",
            "w": "white",
            "y": "yellow"
        },
        "bruises": {
            "t": "bruises",
            "f": "no"   
        },
        "odor": {
            "a": "almond",
            "l": "anise",
            "c": "creosote",
            "y": "fishy",
            "f": "foul",
            "m": "musty",
            "n": "none",
            "p": "pungent",
            "s": "spicy"
        },
        "gillAttachment": {
            "a": "attached",
            "d": "descending",
            "f": "free",
            "n": "notched"
        },
        "gillSpacing": {
            "c": "close",
            "w": "crowded",
            "d": "distant"
            
        },
        "gillSize": {
            "b": "broad",
            "n": "narrow"
        },
        "gillColor": {
            "k": "black",
            "n": "brown",
            "b": "buff",
            "h": "chocolate",
            "g": "gray",
            "r": "green",
            "p": "pink",
            "u": "purple",
            "o": "orange",
            "w": "white",
            "y": "yellow",
            "e": "red"
        },
        "stalkShape": {
            "e": "enlarging",
            "t": "tapering"

        },
        "stalkRoot": {
            "b": "bulbous",
            "c": "club",
            "u": "cup",
            "e": "equal",
            "z": "rhizomorphs",
            "r": "rooted",
            "?": "missing" //upitnik zamijenit
        },
        "stalkSurfaceAboveRing": {
            "f":"fibrous",
            "k": "silky",
            "y": "scaly",
            "s": "smooth"

        },
        "stalkSurfaceBelowRing": {
            "f":"fibrous",
            "k": "silky",
            "y": "scaly",
            "s": "smooth"
        },
        "stalkColorAboveRing": {
            "n": "brown",
            "b": "buff",
            "c": "cinnamon",
            "g": "gray",
            "o": "orange",
            "p": "pink",
            "e": "red",
            "w": "white",
            "y": "yellow"

        },
        "stalkColorBelowRing": {
            "n": "brown",
            "b": "buff",
            "c": "cinnamon",
            "g": "gray",
            "o": "orange",
            "p": "pink",
            "e": "red",
            "w": "white",
            "y": "yellow"
        },
        "veilType": {
            "p": "partial",
            "u": "universal"

        },
        "veilColor": {
            "n": "brown",
            "o": "orange",
            "w": "white",
            "y": "yellow"

        },
        "ringNumber": {
            "n": "none",
            "o": "one",
            "t": "two"
        },
        "ringType": {
            "c": "cobwebby",
            "e": "evanescent",
            "f": "flaring",
            "l": "large",
            "n": "none",
            "p": "pendant",
            "s": "sheating",
            "z": "zone",
        },
        "sporePrintColor": {
            "k": "black",
            "n": "brown",
            "b": "buff",
            "h": "chocolate",
            "r": "green",
            "o": "orange",
            "u": "purple",
            "w": "white",
            "y": "yellow"
        },
        "population": {
            "a": "abundant",
            "c": "clustered",
            "n": "numerous",
            "s": "scattered",
            "v": "several",
            "y": "solitary"
        },
        "habitat": {
            "g": "grasses",
            "l": "leaves",
            "m": "meadows",
            "p": "paths",
            "u": "urban",
            "w": "waste",
            "d": "woods"
        },
        "name": {

        },
        "result": {
            "e": "edible",
            "p": "poisonous"
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
