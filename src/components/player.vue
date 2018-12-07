<template>
  <div class="player container-fluid ">
    <div class="row">
      <div class="col-4">
        {{player.name}}
      </div>
      <div class="col-6" v-for="cardplayer in player.hand">
        <img :src="cardplayer.img" height="200" alt="">
        <p>health: {{cardplayer.health}}</p>
        <p>attack: {{cardplayer.attack}}</p>
        <p>defense: {{cardplayer.defense}}</p>
      </div>
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
        return this.$store.state.game.player
      }
    },
    methods: {}
  }
</script>

<style>
</style>