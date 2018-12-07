import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let cardapi = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games',
  timeout: 3000
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
    getPlayer({ commit }) {
      cardapi.get('player')
        .then(res => {
          console.log('player', res.data)
          commit('setPlayer', res.data)
        })
    },
    getOpponent({ commit }) {
      cardapi.get('opponent')
        .then(res => {
          console.log('opponent', res.data)
          commit('setOpponent', res.data)
        })
    },
    getGame({ commit }, gameId) {
      cardapi.get("/game/" + gameId)
        .then(res => {
          commit('setGame', res.data)
          // router.push({ name: 'Game' }) not sure if i need this
        })
    },
    startGame({ commit }, newGame) {
      cardapi.post("/game", newGame)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game._id } })
        })
    },
    attack({ commit }, payload) {
      cardapi.put("/game/" + payload.gameId, payload.attack)
        .then(res => {
          commit("setGame", res.data)
        })
    }
  }
})
