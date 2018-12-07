<template>
  <div class="opponent container-fluid ">
    <div class="row">
      <div class="col-3" v-for="cardopponent in opponent.hand">
        <div v-on:click="$emit('setOpponent', cardopponent.id); opponentId=cardopponent.id" :class="{'border-success': opponentId == cardopponent.id}"
          class="card">
          <div class="card-content">
            <div v-if="cardopponent.visible">
              {{opponent.name}}
              <img class :src="cardopponent.img" alt="">
              <h4>health: {{cardopponent.health}}</h4>
              <h4>attack: {{cardopponent.attack}}</h4>
              <h4>defense: {{cardopponent.defense}}</h4>
            </div>
            <div>
              <img class="img-responsive" src="//placehold.it/200x300" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
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