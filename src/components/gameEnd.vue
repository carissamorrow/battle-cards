<template>
  <div class="gameEnd">
    <div v-if="!game.winner== player.name">
      <h3>Just Not Your Day</h3>
    </div>
    <div v-else-if="game.winner== player.name">
      <h2>You Win</h2>
    </div>
    <div v-else>
      <h3>Tie!</h3>
    </div>
  </div>
</template>

<script>
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"

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
    components: {
      opponent,
      player
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