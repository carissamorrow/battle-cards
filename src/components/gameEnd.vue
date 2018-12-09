<template>
  <div class="gameEnd">
    <!-- is the game.winner.id really set to the card.id? i just haven't looked at this for a while. -->
    <!--if its working then great but i am just assuming that the game.winner.id would be set to the player.id if the player has an id -->
    <div v-if="game.winner.id== player.id">
      <h1>Nicely Done Winner!</h1>
      <button @click="reset(newNewGame.id)">New Game</button>
    </div>
    <div v-else-if="game.winner.id">
      <h1>You Lose....Try Again!</h1>
      <button @click="reset(newNewgame.id)">New Game</button>
    </div>
    <div v-else>
      <h1>It's a Tie!</h1>
      <button @click="reset(newNewgame.id)">New Game</button>
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
      reset() {
        this.$store.dispatch('reset')
      }
    }
  }

</script>

<style>


</style>