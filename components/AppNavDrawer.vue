<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    @input="navDrawerStatus(drawer)"
  >
    <v-toolbar-title>
      <v-btn
        :to="url.top"
        style="width: 100%; border-radius: 0;"
        color="secondary"
      >
        Restaurant name
      </v-btn>
    </v-toolbar-title>
    <v-spacer />

    <v-list
      dense
      nav
    >
      <div>
        <div
          v-for="(link, i) in links"
          :key="i"
        >
          <v-list-item
            link
            exact
            @click="scrollToLocation(link.address)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ link.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    toggleDrawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapGetters(['nav', 'links', 'url']),
    options() {
      return {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  },
  watch: {
    toggleDrawer() {
      this.drawer = this.$props.toggleDrawer
    }
  },
  methods: {
    navDrawerStatus(value) {
      // eslint-disable-next-line
      console.log('drawer', value)
      if (value === false) {
        this.$emit('close-nav-drawer')
      }
    },
    scrollToLocation(value) {
      this.$vuetify.goTo(value, this.options)
      this.navDrawerStatus(false)
    }
  }
}
</script>
