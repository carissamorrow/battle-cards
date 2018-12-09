<template>
  <div class="gameEnd">
    <div v-if="this.game.over == true && this.game.winner != 'Cats Game'">
      <h1>{{this.game.winner.name}} Wins!!</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gameEnd',
    data() {
      return {

      }
    },

    computed: {
      game() {
        return this.$store.state.game;
      },
      player() {
        return this.$store.state.player
      }
    },
    methods: {
      gameEnd() {
        this.$store.dispatch('gameEnd')
      }
    }
  }

</script>

<style>


</style>