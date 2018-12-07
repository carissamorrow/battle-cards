<template>
  <div class="player container-fluid ">
    <div class="row">
      <div class="col-6">
        {{player.name}}
      </div>
      <div class="col-6">
        <img :src="player.img" height="200" alt="">
      </div>
      <p class="col-12">{{player.health}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {

      }
    },
    computed: {
      player() {
        return this.$store.state.game._player
      }
    },
    methods: {}
  }
</script>

<style>
</style>