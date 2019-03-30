import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VRMap from './views/Map.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
      title: 'Vila Rosa Cluj-Napoca',
      metaTags: [
        {
          name: 'description',
          content: 'Vila Rosa Bed&Breakfast, Cluj-Napoca, Transilvania, România'
        },
        {
          name: 'author',
          content: 'Alin CHIS'
        }
      ]
    }
    },
    {
      path: '/Map',
      name: 'map',
      component: VRMap
    }
  ]
})
