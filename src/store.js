import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let cardapi = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    opponents: [],
    game: {}
  },
  mutations: {
    setPlayers(state, players) {
      state.players = players
    },
    setOpponents(state, opponents) {
      state.opponents = opponents
    },
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {

  }
})
