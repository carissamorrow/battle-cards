<template>
  <div class="opponent container-fluid ">
    <div class="row">
      <div class="col-4">
        {{opponent.name}}
      </div>
      <div class="col-6" v-for="cardopponent in opponent.hand">
        <img :src="cardopponent.img" height="200" alt="">
        <p>health: {{cardopponent.health}}</p>
        <p>attack: {{cardopponent.attack}}</p>
        <p>defense: {{cardopponent.defense}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'opponent',
    data() {
      return {

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