<template>
  <div class="Cards container-fluid">
    <button @click="attack">FIGHT!</button>
    <div class="row">
      <player v-on:setPlayer="playerCard" class="col-12 border rounded m-2">
      </player>
    </div>
    <opponent v-on:setOpponent="opponentCard" class=" col-12 border rounded m-2">
    </opponent>
  </div>
  </div>
  </div>
</template>

<script>
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"

  export default {
    name: 'Cards',
    components: {
      player,
      opponent
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
        this.attack.opponentCardId = cardId
      }
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