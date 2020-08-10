<template>
  <v-col class="pa-0">
    <h1 class="my-6 section--text">
      Find Us
    </h1>
    <v-parallax
      style="height: 80vh; width: 100%;"
      src="/page-images/espresso.jpg"
    >
      <v-card max-width="100vw">
        <google-maps />
      </v-card>
    </v-parallax>
  </v-col>
</template>

<script>
import GoogleMaps from '~/components/GoogleMaps.vue'
export default {
  components: {
    GoogleMaps
  }
}
</script>
