import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Game from './views/Game.vue'
// @ts-ignore
import Card from './views/Card.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card
    }
  ]
})
