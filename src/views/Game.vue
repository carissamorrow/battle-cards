//home view
<template>
  <div class="Game container-fluid">
    <h1>Welcome To The Card Game!</h1>
    <form v-on:submit.prevent="startGame">
      <h3>Your Name Here:</h3>
      <input type="text" v-model="game.gameConfig.playerName" placeholder="name">
    </form>
    <form @submit.prevent="set">
      <h3>Choose a Deck:</h3>
      <input type="number" placeholder="1">
      <button class="btn btn-warning btn-lg" @click="startGame">Start</button>
    </form>
  </div>
</template>

<script>
  import router from '../router.js'

  export default {
    name: 'Game',
    data() {
      return {
        game: {
          gameConfig: {
            playerName: "",
            opponent: 1,
            set: 4
          }
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("newGame", this.game);
      },
      ready() {
        return this.newGame.playerId > -1 && this.newGame.opponentId > -1
      }
    },

    // components: {
    //   opponent,
    //   player
    // }
  }
</script>


<style>
  .Game {
    font-size: 50px;
    font-stretch: expanded;
    color: aquamarine;
    background-color: black;
    text-align: center;
    font-weight: 500;
    text-shadow: 2px 2px #ff0000;
  }
</style>