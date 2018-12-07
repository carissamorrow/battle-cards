<template>
  <div v-if="gameId" class=" player container-fluid ">
    <div class=" row">
      <div class="col-4">
        {{player.name}}
      </div>
      <div class="card" v-for="cardplayer in player.hand">
        <div v-on:click="$emit('setPlayer', cardplayer.id); playerId=cardplayer.id" :class="{'border-success': playerId == cardplayer.id}">
          <div class="col-8">
            <img :src="cardplayer.img" height="200" alt="">
          </div>
          <h4>health: {{cardplayer.health}}</h4>
          <h4>attack: {{cardplayer.attack}}</h4>
          <h4>defense: {{cardplayer.defense}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {
        playerId: ''
      }
    },
    computed: {
      player() {
        return this.$store.state.game.player
      },
      gameId() {
        return this.$store.state.game.id
      }
    },
    methods: {}
  }
</script>

<style>
</style>