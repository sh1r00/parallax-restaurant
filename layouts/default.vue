<template>
  <v-app>
    <v-content>
      <v-container fluid class="pa-0">
        <v-app-bar-nav-icon
          class="hidden-md-and-up nav-toggle"
          color="primary"
          @click="toggleDrawer = !toggleDrawer"
        />
        <app-nav-drawer
          :toggle-drawer="toggleDrawer"
          @close-nav-drawer="toggleDrawer = false"
        />
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppNavDrawer from '~/components/AppNavDrawer.vue'
export default {
  components: {
    AppFooter,
    AppNavDrawer
  },
  data() {
    return {
      toggleDrawer: false
    }
  }
}
</script>

<style>
.nav-toggle {
  position: fixed;
  z-index: 99999;
  bottom: 0;
  right: 0;
  height: 70px !important;
  width: 70px !important;
  background-color: white;
  margin: 0 1.25em 1.25em 0;
}
.v-parallax__content {
  padding: 0;
}
</style>
