<template>
  <v-app-bar
    :fixed="fixed"
    shrink-on-scroll
    prominent
    color="primary"
  >
    <v-toolbar-title>
      <v-btn
        :to="url.top"
        color="secondary"
      >
        Restaurant Name
      </v-btn>
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items>
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="(link,i) in links"
          :key="i"
          color="white"
          text
          rounded
          @click="$vuetify.goTo(link.address, options)"
        >
          {{ link.name }}
        </v-btn>
      </v-layout>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'VuetifyTabMenu',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['links', 'url'])
  }
}
</script>
