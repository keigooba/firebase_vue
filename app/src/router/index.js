import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Addresses from '../views/Addresses'
import AddressForm from '../views/AddressForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: Addresses
    },
    {
      path: '/addresses/:address_id?/edit',
      name: 'addresses_edit',
      component: AddressForm
    }
  ]
})
