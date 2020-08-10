<template>
  <v-footer
    id="colophon"
    class="site-footer footer invisible"
    role="contentinfo"
  >
    <v-row>
      <v-col>
        <v-col sm="8">
          <div style="font-size: 1.25em; margin-bottom: 0.625em;">
            Contact Us
          </div>
          <br>
          <strong>
            Phone:
          </strong>
          <br>
          <v-btn
            :href="`tel:${footer.phone}`"
            text
          >
            {{ footer.phone }}
          </v-btn>
        </v-col>
        <br>
        <v-col sm="8">
          <strong>
            Email:
          </strong>
          <br>
          <v-btn
            :href="`mailto:${footer.email}`"
            text
          >
            {{ footer.email }}
          </v-btn>
        </v-col>
        <br>
        <v-col sm="8">
          <strong>
            Address:
          </strong>
          <br>
          <v-btn
            :href="`http://maps.google.com/?q=${footer.address.street} ${footer.address.city}`"
            target="blank"
            text
          >
            <v-col style="margin-top: 2em;">
              <p>
                {{ footer.address.street }}
              </p>
              <p>
                {{ footer.address.city }}
              </p>
            </v-col>
          </v-btn>
        </v-col>
      </v-col>
      <v-col sm="4">
        <div style="font-style: 1.625em; margin-bottom: 1.625em;">
          Connect
        </div>
        <v-row style="margin-bottom: 1.625em;">
          <v-btn
            v-for="(item, idx) in footer.social"
            :key="idx"
            style="margin-right: 0.625em;"
            :href="item.link"
            target="_blank"
            text
          >
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-row>
        <div style="margin-bottom: 1.625em">
          &copy; {{ footer.year }} {{ footer.company }}
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        phone: '555-555-5555',
        email: 'myEmail@fake.com',
        address: {
          street: '12345 My perstonal st',
          city: 'Alexandria, Va, 22310'
        },
        year: '2020',
        company: 'My Company',
        social: [
          {
            name: 'facebook',
            icon: 'mdi-facebook',
            link: 'https://facebook.com'
          },
          {
            name: 'twitter',
            icon: 'mdi-twitter',
            link: 'https://twitter.com'
          },
          {
            name: 'instagram',
            icon: 'mdi-instagram',
            link: 'https://instagram.com'
          }
        ]
      }
    }
  }
}
</script>
