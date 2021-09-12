<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <SideNav/>

    <v-container fluid fill-height align-start style="margin-top: 65px;">
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'

export default {
  name: 'App',

  components: {
    SideNav
  },
  created() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        if (this.$router.currentRoute.name === 'home') {
          this.$router.push({ name: 'addresses' }, () => {})
        }
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' }, () => {})
      }
    })
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['toggleSideMenu','setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
};
</script>
