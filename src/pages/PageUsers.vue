<template>
    <div class="container-users-page">
        <nav-menu />
        <div>
            <b-table striped hover :items="$store.state.users" :fields="fields">
                <template #cell(index)="data">
                    {{ data.index + 1 }}
                </template>
                <template #cell(addresses)="data">
                    <b class="text-info">{{ data.value}}</b>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    import NavMenu from '../components/layouts/NavMenu'

    export default {
        components:{
          NavMenu
        },
        data(){
            return {
                fields: ['index','id', 'email', 'country_id','country_name','addresses[0].route'],
            }
        },
        mounted() {
            if(this.$store.state.users.length < 1) {
                this.$store.dispatch('fetchUsers')
            }
        }
    }
</script>
