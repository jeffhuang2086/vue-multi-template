import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const box1 = () => import ('../module/box1')
const box2 = () => import ('../module/box2')

export default new Router({
  routes: [
    {
      path: '/',
      component: box1
    },{
      path: '/box2',
      component: box2
    }
  ]
})
