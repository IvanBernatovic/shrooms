<template>
    <div class="row">
        <div class="col-md-4" v-for="mushroom in mushrooms">
            <div class="card ">
                <div class="card-block">
                    <div class="center">
                        <h4>{{ mushroom.name }} <small> - {{ transformField("result", mushroom.result) }}</small></h4>
                        <br>
                        <button type="button" class="btn btn-info-outline" data-toggle="collapse" data-target="#mushroom-info-{{ mushroom.id }}">Show more</button>
                    </div>
                    <div class="info-wrapper">
                        <div class="collapse" id="mushroom-info-{{ mushroom.id }}">
                            <div class="card card-block">
                                <dl class="dl-horizontal" >
                                    <template v-for="(key, value) in mushroom">
                                        <dt>{{ key | parseCamel }}</dt>
                                        <dd>{{ transformField(key, value) }}</dd>
                                    </template>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .center{
        text-align: center;
    }

    .info-wrapper {
        margin-top: 15px;
    }

    .dl-horizontal {
        margin: 0;
    }
</style>

<script>
    import _ from 'underscore'
    import Vue from 'vue'

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
            "f": "Fibrous",
            "g": "Grooves",
            "y": "Scaly",
            "s": "Smooth"
        },
        "capColor": {
            "n": "Brown",
            "b": "Buff",
            "c": "Cinnamon",
            "g": "Gray",
            "r": "Green",
            "p": "Pink",
            "u": "Purple",
            "e": "Red",
            "w": "White",
            "y": "Yellow"
        },
        "bruises": {
            "t": "Yes",
            "f": "No"
        },
        "odor": {
            "a": "Almond",
            "l": "Anise",
            "c": "Creosote",
            "y": "Fishy",
            "f": "Foul",
            "m": "Musty",
            "n": "None",
            "p": "Pungent",
            "s": "Spicy"
        },
        "gillAttachment": {
            "a": "Attached",
            "d": "Descending",
            "f": "Free",
            "n": "Notched"
        },
        "gillSpacing": {
            "c": "Close",
            "w": "Crowded",
            "d": "Distant"
            
        },
        "gillSize": {
            "b": "Broad",
            "n": "Narrow"
        },
        "gillColor": {
            "k": "Black",
            "n": "Brown",
            "b": "Buff",
            "h": "Chocolate",
            "g": "Gray",
            "r": "Green",
            "p": "Pink",
            "u": "Purple",
            "o": "Orange",
            "w": "White",
            "y": "Yellow",
            "e": "Red"
        },
        "stalkShape": {
            "e": "Enlarging",
            "t": "Tapering"

        },
        "stalkRoot": {
            "b": "Bulbous",
            "c": "Club",
            "u": "Cup",
            "e": "Equal",
            "z": "Rhizomorphs",
            "r": "Rooted",
            "?": "Missing"
        },
        "stalkSurfaceAboveRing": {
            "f":" Fibrous",
            "k": "Silky",
            "y": "Scaly",
            "s": "Smooth"

        },
        "stalkSurfaceBelowRing": {
            "f": "Fibrous",
            "k": "Silky",
            "y": "Scaly",
            "s": "Smooth"
        },
        "stalkColorAboveRing": {
            "n": "Brown",
            "b": "Buff",
            "c": "Cinnamon",
            "g": "Gray",
            "o": "Orange",
            "p": "Pink",
            "e": "Red",
            "w": "White",
            "y": "Yellow"

        },
        "stalkColorBelowRing": {
            "n": "Brown",
            "b": "Buff",
            "c": "Cinnamon",
            "g": "Gray",
            "o": "Orange",
            "p": "Pink",
            "e": "Red",
            "w": "White",
            "y": ">ellow"
        },
        "veilType": {
            "p": "Partial",
            "u": "Universal"

        },
        "veilColor": {
            "n": "Brown",
            "o": "Orange",
            "w": "White",
            "y": "Yellow"

        },
        "ringNumber": {
            "n": "None",
            "o": "One",
            "t": "Two"
        },
        "ringType": {
            "c": "Cobwebby",
            "e": "Evanescent",
            "f": "Flaring",
            "l": "Large",
            "n": "None",
            "p": "Pendant",
            "s": "Sheating",
            "z": "Zone",
        },
        "sporePrintColor": {
            "k": "Black",
            "n": "Brown",
            "b": "Buff",
            "h": "Chocolate",
            "r": "Green",
            "o": "Orange",
            "u": "Purple",
            "w": "White",
            "y": "Yellow"
        },
        "population": {
            "a": "Abundant",
            "c": "Clustered",
            "n": "Numerous",
            "s": "Scattered",
            "v": "Several",
            "y": "Solitary"
        },
        "habitat": {
            "g": "Grasses",
            "l": "Leaves",
            "m": "Meadows",
            "p": "Paths",
            "u": "Urban",
            "w": "Waste",
            "d": "Woods"
        },
        "result": {
            "e": "Edible",
            "p": "Poisonous"
        }
    }

    Vue.filter('parseCamel', function (value) {
        var result = value.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1)
    })

    export default{
        init(){
            var self = this
            this.$http.get('http://shrooms-service.ivan-test.xyz/v1/mushrooms').then((response) => {
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
            // not in use on final version
            successOrErrorClass(result){
                if(result == 'e'){
                    return {
                        'card-success': true
                    }
                } else {
                    return {
                        'card-danger': true
                    }
                }
            },

            transformField(label, value){
                // some values should be returned as original
                if(_.contains(['id', 'name', 'created_at', 'updated_at', 'probability'], label))
                    return value

                return valueTransformer[label][value]
            }
        },
        components: {

        }
    }
</script>
