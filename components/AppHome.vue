<template>
  <v-col id="home" class="pa-0">
    <vuetify-tab-nav class="hidden-md-and-down hero-nav" :fixed="stickyNav" />
    <v-parallax
      style="height: 75vh; width: 100%; text-align: center;"
      src="/page-images/espresso.jpg"
    > 
      <div class="parallax--overlay" />
      <h1 class="parallax--text">
        Home Content
      </h1>
    </v-parallax>
  </v-col>
</template>
<script>
import VuetifyTabNav from './VuetifyTabNav.vue'
import debounce from '~/components/utils/debounce.js'
export default {
  components: {
    VuetifyTabNav
  },
  data() {
    return {
      stickyNav: false
    }
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 0)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    handleScroll() {
      const sticky = document.getElementById('home')
      let stickyTop = 0
      stickyTop = sticky.offsetTop
      if (stickyTop <= window.scrollY) {
        this.stickyNav = true
      } else {
        this.stickyNav = false
      }
    }
  }
}
</script>
<style scoped>
.parallax--overlay {
  background: black;
  opacity: 0.3;
  height: 100%;
  width: 100%;
  opacity: 0.6;
}
.parallax--text {
  color: white;
  position: absolute;
  margin-left: 45%;
  z-index: 9999;
}

@media only screen and (max-width: 600px) {
  .parallax--text {
    margin-left: 25%;
  }
}
</style>
