import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

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
    getPlayers({ commit }) {
      cardapi.get('players')
        .then(res => {
          console.log('players', res.data)
          commit('setPlayers', res.data)
        })
    },
    getOpponents({ commit }) {
      cardapi.get('opponents')
        .then(res => {
          console.log('opponents', res.data)
          commit('setOpponents', res.data)
        })
    },
    getGame({ commit }, gameId) {
      cardapi.get("/games/" + gameId)
        .then(res => {
          commit('setGame', res.data)
          // router.push({ name: 'Game' }) not sure if i need this
        })
    },
    startGame({ commit }, newGame) {
      cardapi.post("/games", newGame)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game._id } })
        })
    },
    attack({ commit }, payload) {
      cardapi.put("/games/" + payload.gameId, payload.attack)
        .then(res => {
          commit("setGame", res.data)
        })
    }
  }
})
