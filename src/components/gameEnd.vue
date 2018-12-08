<template>
  <div class="gameEnd">
    <div v-if="game.winner.id == game.player[0].id">
      <h1>Nicely Done Winner!</h1>
      <button @click="startAgain(game.id)">Replay</button>
    </div>
    <div v-else-if="game.winner.id">
      <h1>You Lose....Try Again!</h1>
      <button @click="startAgain(game.id)">Replay</button>
    </div>
    <div v-else>
      <h1>It's a Tie!</h1>
      <button @click="startAgain(game.id)">Replay</button>
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
      startAgain(gameId) {
        this.$store.dispatch("quit", gameId);
      }
    }
  }

</script>

<style>


</style>