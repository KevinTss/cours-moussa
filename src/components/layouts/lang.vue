<template>
    <div class="locale-changer">
        <el-select v-model="$i18n.locale" placeholder="lang">
            <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: 'locale-changer',
        computed: {
            langs() {
                return this.$i18n.availableLocales;
            }
        }
    };
</script>
