//home view
<template>
  <div class="game container-fluid">
    <h1>Best Card Game EVER</h1>
    <form v-on:submit.prevent="startGame">
      <h4>Enter your name here:</h4>
      <input type="text" v-model="game.gameConfig.playerName" placeholder="name">
    </form>
    <form @submit.prevent="startGame">
      <h4>Choose a Deck:</h4>
      <input type="number" placeholder="1">
      <button class="btn btn-warning btn-lg" type="submit">Start</button>
    </form>
  </div>
</template>

<script>
  //not sure if this goes here or just card.vue
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"

  export default {
    name: 'Game',
    data() {
      return {
        game: {
          gameConfig: {
            playerName: "",
            opponent: 1,
            set: 2,
          },
          newGame: {
            playerId: -1,
            opponentId: -1,
            gameId: ''
          }
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("startGame", this.game);
      },
      ready() {
        return this.game.playerId > -1 && this.game.opponentId > -1
      }
    },

    computed: {
      players() {
        return this.$store.state.players
      },
      opponents() {
        return this.$store.state.opponents
      }
    }
  }
</script>


<style>
  .game {
    font-size: 50px;
    font-stretch: expanded;
    color: aquamarine;
    background-color: black;
    text-align: center;
    font-weight: 500;
    text-shadow: 2px 2px #ff0000;
  }
</style>