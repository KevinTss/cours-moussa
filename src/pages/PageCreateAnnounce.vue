<template>
    <div>
    <nav-menu/>
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="brand">Brand</label>
                        <select id="brand" class="form-control">
                            <option  v-for="brand in $store.state.brands" :key="brand.id" >{{brand.name}}</option>
                        </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="month">Month</label>
                    <select id="month" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="year">Year</label>
                    <select id="year" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="fuel">Fuel</label>
                    <select id="fuel" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="model">Model</label>
                    <select id="model" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="kw">Kw</label>
                    <select id="kw" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="transmission">Transmission</label>
                    <select id="transmission" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="serial">Sérial</label>
                    <select id="serial" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="other">Other</label>
                    <input type="text" class="form-control" id="other" placeholder="Other" >
                </div>
                <div class="form-group col-md-4">
                    <label for="body">Body</label>
                    <select id="body" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Next Step</button>
        </form>
    </div>
</template>

<script>
    import NavMenu from "../components/layouts/NavMenu";
    export default {
        components: {NavMenu},
        mounted() {
            console.log(this.brands)
            if(this.$store.state.brands.length < 1) {
                this.$store.dispatch('fetchBrands')
            }
        }
    }
</script>