<template>
    <div>
        <nav-menu/>
        <new-annouce-form/>
    </div>
</template>

<script>
    import NavMenu from "../components/layouts/NavMenu";
    import NewAnnouceForm from '../components/annouce/NewAnnouceForm'
    import BrandMixin from '../mixins/brand'

    export default {
        mixins: [BrandMixin],
        components: {NavMenu, NewAnnouceForm},
        mounted() {
            if(this.brands < 1) {
                this.$store.dispatch('brand/fetchBrands')
            }
        }
    }
</script>
