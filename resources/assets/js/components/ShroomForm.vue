<script>
    export default {

    }
</script>

<template>
    <form>
        <!-- Cap section -->
        <div class="row">
            <div class="shroom-section">
                <div class="col-lg-12">
                    <h2>Cap</h2>
                </div>
                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="capSurface">Surface</label>
                        <select class="form-control" id="capSurface" name="capSurface">
                            <option value="f">Fibrous</option>
                            <option value="g">Grooves</option>
                            <option value="y">Scaly</option>
                            <option value="s">Smooth</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="capColor">Color</label>
                        <select class="form-control" id="capColor" name="capColor">
                            <option value="n">Brown</option>
                            <option value="b">Buff</option>
                            <option value="c">Cinnamon</option>
                            <option value="g">Gray</option>
                            <option value="p">Green</option>
                            <option value="u">Pink</option>
                            <option value="e">Purple</option>
                            <option value="w">White</option>
                            <option value="i">Yellow</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="capShape">Shape</label>
                        <select class="form-control" id="capShape" name="capShape">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        </div>

        <!-- Gill section -->
        <div class="row">
            <div class="shroom-section">
                <div class="col-lg-12">
                    <h2>Gill</h2>
                </div>
                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillAttachment">Attachment</label>
                        <select class="form-control" id="gillAttachment" name="gillAttachment">
                            <option value="a">Attached</option>
                            <option value="d">Descending</option>
                            <option value="f">Free</option>
                            <option value="n">Notched</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillColor">Color</label>
                        <select class="form-control" id="gillColor" name="gillColor">
                            <option value="n">Brown</option>
                            <option value="k">Black</option>
                            <option value="b">Buff</option>
                            <option value="g">Gray</option>
                            <option value="r">Green</option>
                            <option value="p">Pink</option>
                            <option value="u">Purple</option>
                            <option value="w">White</option>
                            <option value="y">Yellow</option>
                            <option value="h">Chocolate</option>
                            <option value="o">Orange</option>
                            <option value="e">Red</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillSpacing">Spacing</label>
                        <select class="form-control" id="gillSpacing" name="gillSpacing">
                            <option value="w">Crowded</option>
                            <option value="c">Close</option>
                            <option value="d">Distant</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillSize">Size</label>
                        <select class="form-control" id="gillSize" name="gillSize">
                            <option value="b">Broad</option>
                            <option value="n">Narrow</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        </div>

        <!-- Stalk section -->
        <div class="row">
            <div class="shroom-section">
                <div class="col-lg-12">
                    <h2>Stalk</h2>
                </div>
                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkShape">Shape</label>
                        <select class="form-control" id="stalkShape" name="stalkShape">
                            <option value="t">Tapering</option>
                            <option value="e">Enlarging</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkRoot">Root</label>
                        <select class="form-control" id="stalkRoot" name="stalkRoot">
                            <option value="">Bulbous</option>
                            <option value="c">Club</option>
                            <option value="u">Cup</option>
                            <option value="e">Equal</option>
                            <option value="z">Rhizomorphs</option>
                            <option value="r">Rooted</option>
                        <!-- Pogledati poslije --> <option value="?">Missing</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkSurfaceAboveRing">Surface above ring</label>
                        <select class="form-control" id="stalkSurfaceAboveRing" name="stalkSurfaceAboveRing">
                            <option value="f">Fibrous</option>
                            <option value="y">Scaly</option>
                            <option value="k">Silky</option>
                            <option value="s">Smooth</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkSurfaceBelowRing">Surface below ring</label>
                        <select class="form-control" id="stalkSurfaceBelowRing" name="stalkSurfaceBelowRing">
                            <option value="f">Fibrous</option>
                            <option value="y">Scaly</option>
                            <option value="k">Silky</option>
                            <option value="s">Smooth</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkColorAboveRing">Color above ring</label>
                        <select class="form-control" id="stalkColorAboveRing" name="stalkColorAboveRing">
                            <option value="n">Brown</option>
                            <option value="b">Buff</option>
                            <option value="c">Cinnamon</option>
                            <option value="g">Gray</option>
                            <option value="p">Pink</option>
                            <option value="w">White</option>
                            <option value="y">Yellow</option>
                            <option value="h">Chocolate</option>
                            <option value="o">Orange</option>
                            <option value="e">Red</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkColorBelowRing">Color below ring</label>
                        <select class="form-control" id="stalkColorBelowRing" name="stalkColorBelowRing">
                            <option value="n">Brown</option>
                            <option value="b">Buff</option>
                            <option value="c">Cinnamon</option>
                            <option value="g">Gray</option>
                            <option value="p">Pink</option>
                            <option value="w">White</option>
                            <option value="y">Yellow</option>
                            <option value="h">Chocolate</option>
                            <option value="o">Orange</option>
                            <option value="e">Red</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        </div>

        <!-- Ring and veil sections -->
        <div class="row">
            <div class="shroom-section">
                <div class="col-md-6" style="padding-left: 0; padding-right: 0">
                    <div class="col-lg-12">
                        <h2>Veil</h2>
                    </div>
                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="veilType">Type</label>
                            <select class="form-control" id="veilType" name="veilType">
                                <option value="p">Partial</option>
                                <option value="u">Universal</option>
                            </select>
                        </fieldset>
                    </div>

                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="veilColor">Color</label>
                            <select class="form-control" id="veilColor" name="veilColor">
                                <option value="n">Brown</option>
                                <option value="o">Orange</option>
                                <option value="w">White</option>
                                <option value="y">Yellow</option>
                            </select>
                        </fieldset>
                    </div>
                </div>

                <div class="col-md-6" style="padding-left: 0; padding-right: 0">
                    <div class="col-lg-12">
                        <h2>Ring</h2>
                    </div>
                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="ringNumber">Number</label>
                            <select class="form-control" id="ringNumber" name="ringNumber">
                                <option value="n">None</option>
                                <option value="o">One</option>
                                <option value="t">Two</option>
                            </select>
                        </fieldset>
                    </div>

                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="ringType">Type</label>
                            <select class="form-control" id="ringType" name="ringType">
                                <option value="c">Cobwebby</option>
                                <option value="e">Evanescent</option>
                                <option value="f">Flaring</option>
                                <option value="l">Large</option>
                                <option value="n">None</option>
                                <option value="p">Pendant</option>
                                <option value="s">Sheathing</option>
                                <option value="z">Zone</option>
                            </select>
                        </fieldset>
                    </div>
                </div>


            </div>
        </div>

        <!-- Other section -->
        <div class="row">
            <div class="shroom-section">
                <div class="col-lg-12">
                    <h2>Other attributes</h2>
                </div>
                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="bruises">Bruises</label>
                        <select class="form-control" id="bruises" name="bruises">
                            <option value="t">Yes</option>
                            <option value="f">No</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="odor">Odor</label>
                        <select class="form-control" id="odor" name="odor">
                            <option value="a">Almond</option>
                            <option value="l">Anise</option>
                            <option value="c">Creosote</option>
                            <option value="y">Fishy</option>
                            <option value="f">Foul</option>
                            <option value="m">Musty</option>
                            <option value="n">None</option>
                            <option value="p">Pungent</option>
                            <option value="s">Spicy</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="sporePrintColor">Spore print color</label>
                        <select class="form-control" id="sporePrintColor" name="sporePrintColor">
                            <option value="n">Brown</option>
                            <option value="b">Buff</option>
                            <option value="k">Black</option>
                            <option value="u">Purple</option>
                            <option value="w">White</option>
                            <option value="y">Yellow</option>
                            <option value="h">Chocolate</option>
                            <option value="o">Orange</option>
                            <option value="r">Green</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="population">Population</label>
                        <select class="form-control" id="population" name="population">
                            <option value="a">Abundant</option>
                            <option value="c">Clustered</option>
                            <option value="n">Numerous</option>
                            <option value="s">Scattered</option>
                            <option value="v">Several</option>
                            <option value="y">Solitary</option>
                        </select>
                    </fieldset>
                </div>
                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="habitat">Habitat</label>
                        <select class="form-control" id="habitat" name="habitat">
                            <option value="g">Grasses</option>
                            <option value="l">Leaves</option>
                            <option value="m">Meadows</option>
                            <option value="p">Paths</option>
                            <option value="u">Urban</option>
                            <option value="w">Waste</option>
                            <option value="d">Woods</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        </div>

        <input type="submit" class="btn btn-primary-outline">
    </form>
</template>