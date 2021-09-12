import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI2OJGP9MYSWfU03-e-RDuiUDEoHlLqQA",
  authDomain: "my-address-pj-442d6.firebaseapp.com",
  projectId: "my-address-pj-442d6",
  storageBucket: "my-address-pj-442d6.appspot.com",
  messagingSenderId: "570548906940",
  appId: "1:570548906940:web:d0ce4b06d87df8df5559b9",
  measurementId: "G-6BFXBXV065"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
