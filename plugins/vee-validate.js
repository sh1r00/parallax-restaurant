import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, mimes, size } from 'vee-validate/dist/rules'

import Vue from 'vue'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'The {_field_} field is required'
})

extend('mimes', {
  ...mimes,
  message: 'This file type is not supported'
})

extend('size', {
  ...size,
  message: 'This file size is too big'
})
