<template>
  <div class="opponent container-fluid">
    <div class="row">
      <div class="col-6">
        {{opponent.name}}
      </div>
      <div class="col-6">
        <img :src="opponent.img" height="200" alt="">
      </div>
      <p class="col-12">{{opponent.health}}</p>
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
        this.$store.dispatch("attack", { attack: newAttack, gameId: this.gameId })
      }
    }
  }

</script>

<style>


</style>