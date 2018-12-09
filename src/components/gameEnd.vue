<template>
  <div class="gameEnd">
    <div v-if="game.winner.id== game.remainingCards[0].id">
      <h1>Nicely Done Winner!</h1>
      <button @click="reset(game.id)">New Game</button>
    </div>
    <div v-else-if="game.winner.id">
      <h1>You Lose....Try Again!</h1>
      <button @click="reset(game.id)">New Game</button>
    </div>
    <div v-else>
      <h1>It's a Tie!</h1>
      <button @click="reset(game.id)">New Game</button>
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