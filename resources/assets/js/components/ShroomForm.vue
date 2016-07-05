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
                            <option value="f">Fibrous</option>
                            <option value="g">Grooves</option>
                            <option value="y">Scaly</option>
                            <option value="s">Smooth</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillColor">Color</label>
                        <select class="form-control" id="gillColor" name="gillColor">
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

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillSpacing">Spacing</label>
                        <select class="form-control" id="gillSpacing" name="gillSpacing">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="gillSize">Size</label>
                        <select class="form-control" id="gillSize" name="gillSize">
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
                            <option value="f">Fibrous</option>
                            <option value="g">Grooves</option>
                            <option value="y">Scaly</option>
                            <option value="s">Smooth</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkRoot">Root</label>
                        <select class="form-control" id="stalkRoot" name="stalkRoot">
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
                        <label for="stalkSurfaceAboveRing">Surface above ring</label>
                        <select class="form-control" id="stalkSurfaceAboveRing" name="stalkSurfaceAboveRing">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkSurfaceBelowRing">Surface below ring</label>
                        <select class="form-control" id="stalkSurfaceBelowRing" name="stalkSurfaceBelowRing">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkColorAboveRing">Color above ring</label>
                        <select class="form-control" id="stalkColorAboveRing" name="stalkColorAboveRing">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-4">
                    <fieldset class="form-group">
                        <label for="stalkColorBelowRing">Color below ring</label>
                        <select class="form-control" id="stalkColorBelowRing" name="stalkColorBelowRing">
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
                                <option value="f">Fibrous</option>
                                <option value="g">Grooves</option>
                                <option value="y">Scaly</option>
                                <option value="s">Smooth</option>
                            </select>
                        </fieldset>
                    </div>

                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="veilColor">Color</label>
                            <select class="form-control" id="veilColor" name="veilColor">
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
                </div>

                <div class="col-md-6" style="padding-left: 0; padding-right: 0">
                    <div class="col-lg-12">
                        <h2>Ring</h2>
                    </div>
                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="ringNumber">Number</label>
                            <select class="form-control" id="ringNumber" name="ringNumber">
                                <option value="b">Bell</option>
                                <option value="c">Conical</option>
                                <option value="x">Convex</option>
                                <option value="f">Flat</option>
                                <option value="k">Knobbed</option>
                                <option value="s">Sunken</option>
                            </select>
                        </fieldset>
                    </div>

                    <div class="col-md-6">
                        <fieldset class="form-group">
                            <label for="ringType">Type</label>
                            <select class="form-control" id="ringType" name="ringType">
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

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="sporePrintColor">Spore print color</label>
                        <select class="form-control" id="sporePrintColor" name="sporePrintColor">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>

                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="population">Population</label>
                        <select class="form-control" id="population" name="population">
                            <option value="b">Bell</option>
                            <option value="c">Conical</option>
                            <option value="x">Convex</option>
                            <option value="f">Flat</option>
                            <option value="k">Knobbed</option>
                            <option value="s">Sunken</option>
                        </select>
                    </fieldset>
                </div>
                <div class="col-md-3">
                    <fieldset class="form-group">
                        <label for="habitat">Habitat</label>
                        <select class="form-control" id="habitat" name="habitat">
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

        <input type="submit" class="btn btn-primary-outline">
    </form>
</template>