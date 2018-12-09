<template>
  <div v-if="gameId" class="opponent container-fluid ">
    <div class="row">
      <div class="col-3" v-for="cardopponent in opponent.hand">
        <div v-on:click="$emit('setOpponent', cardopponent.id); opponentId=cardopponent.id" :class="{'border-success': opponentId == cardopponent.id}"
          class="card">
          <div class="card-content">
            <div v-if="cardopponent.visible">
              {{cardopponent.name}}
              <img class :src="cardopponent.img" alt="">
              <h4>health: {{cardopponent.health}}</h4>
              <h4>attack: {{cardopponent.attack}}</h4>
              <h4>defense: {{cardopponent.defense}}</h4>
            </div>
            <div v-else>
              <img class="img-responsive" src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/d/df/Card_back-Ragnaros.png?version=58a5ef605a105d350b1e8d4da1873ac8"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4>Card Deck Lives Left: {{opponent.remainingCards}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'opponent',
    data() {
      return {
        opponentId: ''
      }
    },
    computed: {
      opponent() {
        return this.$store.state.game.opponent
      },
      gameId() {
        return this.$store.state.game.id
      }
    },
    methods: {
      attack(attackName) {
        let newAttack = {
          attack: attackName
        }
        this.$store.dispatch("attack", { attack: newAttack, id: this.id })
      }
    }
  }


</script>

<style>


</style>