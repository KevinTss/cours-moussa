<template>
    <div class="container-home">
        <navMenu />
        <!--<b-nav>
            <b-nav-item>
                <b-link to="/">HOME</b-link>
            </b-nav-item>
            <b-nav-item>
                <b-link to="/about">ABOUT</b-link>
            </b-nav-item>
            <b-nav-item>
                <b-link to="/members">MEMBERS</b-link>
            </b-nav-item>
        </b-nav>-->
        <div>
            <b-table striped hover :items="users" :fields="fields">
                <template #cell(index)="data">
                    {{ data.index + 1 }}
                </template>
                <template #cell(addresses)="data">
                    <b class="text-info">{{ data.value}}</b>
                </template>
            </b-table>

        </div>
            <!--<table>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Country_name</th>
                    <th>Name</th>
                </tr>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.country_name}}</td>
                </tr>
            </table>-->
    </div>
</template>

<script>
    import NavMenu from '../components/layouts/NavMenu'
    import API from "../api";
    export default {
        components:{
          NavMenu
        },data(){
            return {
                fields: ['index','id', 'email', 'country_id','country_name','addresses','address.route'],
                users:[]
            }
        },
        /*created() {
            this.getAnnounces()
            console.log(this.$store.state)
        },*/
        mounted() {
            API.get('users').then(res => {
                //console.log(res.data.data.users)
                this.users = res.data.data.data
            })
        }
    }


</script>
