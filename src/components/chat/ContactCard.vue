<template>
  <div class="contact-card" @click="onClick">
    <h1>owner vehivle id: {{ getAnnounce(conversation.announce_car_id).owner_vehicle_id }}</h1>
  </div>
</template>

<script>
  import AnnounceMixin from '../../mixins/announces';

  export default {
    mixins: [AnnounceMixin],
    props: {
      conversation: {
        type: Object,
        required: true
      },
    },
    methods:{
      onClick() {
        this.$emit('click', this.conversation.id);
      }
    },
    created(){
      this.fetchAnnounceIfNotAlreadyDone(this.conversation.announce_car_id);
    }
  };
</script>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #0005
}
.contact-card:hover {
  transform: scale(1.05);
}
</style>
