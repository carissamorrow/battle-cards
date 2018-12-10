<template>
  <div>
    <div class="Cards container-fluid">
      <button v-on:click="fight">FIGHT!</button>
      <div class="row">
        <player v-on:setPlayer="playerCard" class="col-12 border rounded m-2">
        </player>
      </div>
      <opponent v-on:setOpponent="opponentCard" class=" col-12 border rounded m-2">
      </opponent>
      <gameEnd v-if="game.over"></gameEnd>
    </div>
  </div>
</template>


<script>
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"
  import gameEnd from '@/components/gameEnd.vue'

  export default {
    name: 'Cards',
    components: {
      player,
      opponent,
      gameEnd
    },
    data() {
      return {
        attack: {
          playerCardId: '',
          opponentCardId: ''
        }
      }
    },
    mounted() {
      if (!this.game.id) {
        this.$store.dispatch("getGame", this.$route.params.id)
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      opponentCard(cardId) {
        console.log(cardId)
        this.attack.opponentCardId = cardId
      },
      playerCard(cardId) {
        console.log(cardId)
        this.attack.playerCardId = cardId
      },
      fight() {
        var data = {
          id: this.game.id,
          attack: this.attack
        }
        this.$store.dispatch('attack', data)
      },
    }
  }
</script>
<style>
  .Cards {
    font-size: 50px;
    font-stretch: expanded;
    color: aquamarine;
    background-color: black;
    text-align: center;
    font-weight: 500;
    text-shadow: 2px 2px #ff0000;
  }
</style>