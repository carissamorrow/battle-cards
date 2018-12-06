import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Game from './views/Game.vue'
// @ts-ignore
import Cards from './views/Cards.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/Cards',
      name: 'Cards',
      component: Cards
    }
  ]
})
