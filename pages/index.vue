<template>
  <div max-width="100vw">
    <app-hero
      id="hero"
      tag="section"
      class="section"
    />
    <app-home
      id="home"
      tag="section"
      class="section"
    />
    <app-about
      id="about"
      tag="section"
      class="section"
    />
    <app-featured
      id="featured"
      tag="section"
      class="section"
    />
    <app-contact
      id="contact"
      tag="section"
      class="section"
    />
  </div>
</template>

<script>
import AppHero from '~/components/AppHero.vue'
import AppHome from '~/components/AppHome.vue'
import AppAbout from '~/components/AppAbout.vue'
import AppFeatured from '~/components/AppFeatured.vue'
import AppContact from '~/components/AppContact.vue'

export default {
  components: {
    AppHero,
    AppHome,
    AppAbout,
    AppFeatured,
    AppContact
  },
  data() {
    return {
      stickNav: false
    }
  }
}
</script>

<style>
.section--text {
  color: black;
  width: 100%;
  text-align: center;
  margin: 1.625em 0;
}
</style>
