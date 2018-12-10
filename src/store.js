import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let cardapi = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games',

})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    // setPlayers(state, players) {
    //   state.players = players
    // },
    // setOpponents(state, opponents) {
    //   state.opponents = opponents
    // },
    setGame(state, game) {
      console.log(game)
      state.game = game
    },
    newNewGame(state) {
      state.game = {}
    }

  },
  actions: {

    getGame({ commit }, gameId) {
      cardapi.get("/" + gameId)
        .then(res => {
          console.log(res.data.data)
          commit('setGame', res.data.data)
          router.push({ name: 'Card', params: { id: res.data.data.id } })
        })
    },
    startGame({ commit }, newGame) {
      cardapi.post("/", newGame)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'Card', params: { id: res.data.game.id } })
        })
    },
    attack({ commit }, payload) {
      cardapi.put("/" + payload.id, payload.attack)
        .then(res => {
          commit("setGame", res.data.game)
        })
    },
    // gameEnd({ commit, dispatch }) {
    //   commit('newNewGame')
    // }
  }
})
