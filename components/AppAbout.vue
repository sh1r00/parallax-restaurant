<template>
  <v-col class="pa-0">
    <h1 class="my-6 section--text">
      A little about us
    </h1>
    <v-col class="hidden-sm-and-down" style="margin: 0 10% 0 10%;">
      <v-row style="margin: 4em 30% 2em 0;">
        <v-img
          height="450px"
          max-width="450px"
          :src="aboutImg.top"
          style="margin-right: 5em; border-radius: 6%;"
          alt="About Image Top"
        />
        <p>Something about this picture</p>
      </v-row>
    </v-col>

    <v-col class="hidden-md-and-up pa-0">
      <v-img
        height="80vh"
        max-width="100%"
        :src="aboutImg.top"
        class="pa-0"
        style="border-radius: 6%;"
        alt="About Image Top"
      />
      <p>Something about this picture</p>
    </v-col>

    <v-parallax
      style="height: 50vh; width: 100%;"
      src="/page-images/sandwich.jpg"
    />
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      aboutImg: {
        top: '/page-images/restaurant-owner.jpg'
      }
    }
  }
}
</script>
