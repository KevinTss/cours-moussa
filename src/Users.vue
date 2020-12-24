<template>
  <div>
      <ul class="users-container">
        <li v-for="user in $store.state.users" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { users: [] }
  },
 created() {
   this.fetchusers()
 },
 mixins: [],
 methods: {
   fetchusers() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(result => result.json())
    .then(resultFinal => {
      this.users = [...resultFinal, {username:'kevin'}]
      this.emitUserArrived()
    })
   },

   emitUserArrived() {
     this.$emit('userArrived', this.users)
   }
 }
}
</script>
