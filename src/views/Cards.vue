<template>
  <div class="Cards">
    <div class="row">
      <player class="col-6"></player>
      <opponent class="col-6"></opponent>
    </div>
  </div>
</template>

<script>
  import player from "@/components/player.vue"
  import opponent from "@/components/opponent.vue"

  export default {
    name: 'Cards',
    components: {
      // player,
      // opponent
    },
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch("getGame", this.$route.params.gameId)
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