<template>
<div class="page-container">
    <el-header>
      <nav-menu />
    </el-header>
    <el-main>
        <el-row :gutter="10">
            <el-col :span="16" :offset="4">
                <new-annouce-form/>
            </el-col>
        </el-row>
    </el-main>
</div>
</template>

<script>
    import NavMenu from "../components/layouts/NavMenu";
    import NewAnnouceForm from '../components/announce/NewAnnounceForm';
    import BrandMixin from '../mixins/brand';

    export default {
        name: "page-create-announce",
        mixins: [BrandMixin],
        components: {NavMenu, NewAnnouceForm},
        mounted() {
            if(this.brands < 1) {
                this.$store.dispatch('brand/fetchBrands');
            }
        }
    };
</script>

<style lang="css" >
.page-container {
  width: 100%;
}
</style>
