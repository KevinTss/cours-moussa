<template>
    <el-form ref="form" :model="form" label-width="150px">
        <el-container>
            <el-col :span="11" >
                <el-form-item label="particular price ttc:">
                    <el-input v-model="form.particular_price_net" placeholder="price all taxes included"  style="width: 100%;"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :span="2">
                <el-form-item></el-form-item>
            </el-col>
            <el-col v-if="form.vat" :span="10">
                <el-form-item label="particular price netto:">
                    <el-input v-model="form.particular_price_brut" placeholder="net price"  style="width: 100%;"></el-input>
                </el-form-item>
            </el-col>
        </el-container>
        <el-container>
            <el-col :span="4">
                <el-form-item label="vat deduction">
                    <el-switch v-model="form.vat"></el-switch>
                </el-form-item>
            </el-col>
            <el-col v-if="form.vat" :span="7">
                <el-form-item label="vat rate:">
                    <el-input :disabled="true" v-model="form.vat_rate" placeholder="net price"  style="width: 100%;"></el-input>
                </el-form-item>
            </el-col>
            <el-col  :span="2">
                <el-form-item></el-form-item>
            </el-col>
            <el-col v-if="form.vat" :span="10">
                <el-form-item label="vat amount:">
                    <el-input :disabled="true"   style="width: 100%;"></el-input>
                </el-form-item>
            </el-col>
        </el-container>
        <el-form-item label="Description">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Créer</el-button>
            <el-button>Annuler</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    particular_price_net: '',
                    particular_price_brut:'',
                    vat_rate:'21',
                    region: '',
                    date1: '',
                    date2: '',
                    vat: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            };
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    };
</script>