//home view
<template>
  <div class="home container-fluid">
    <button :disabled="!ready()" :class="{'btn-success':ready()}" class="btn btn-primary" @click="startGame">Start Game</button>
    <div class="row justify-content-around">
      <div class="col-5">
        <div @click="newGame.playerId=player.id" :class="{'border-success': newGame.playerId == player.id}" class="border rounded m-2"
          v-for="player in players">
          {{player.name}}
          <img :src="player.img" height="200">
        </div>
      </div>
      <div class="col-5">
        <div @click="newGame.opponentId=opponent.id" :class="{'border-success': newGame.opponentId == opponent.id}"
          class="border rounded m-2" v-for="opponent in opponents">
          {{opponent.name}}
          <img :src="opponent.img" height="200">
        </div>
      </div>

    </div>
  </div>
</template>

<script>


  export default {
    name: 'Game',
    data() {
      return {
        game: {
          gameConfig: {
            playerName: "",
            opponent: 1,
            set: 4,
          },
          newGame: {
            playerId: -1,
            opponentId: -1
          }
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("newGame", this.game);
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