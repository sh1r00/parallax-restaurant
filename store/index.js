export const state = () => ({
  globals: {
    nav: [],
    header: {
      site_title: null,
      motto: null,
      favicon: {
        path: ''
      },
      logo: {
        path: ''
      }
    },
    contact_info: {
      phone: null,
      email: null,
      address: null
    },
    social: {
      facebook: null,
      twitter: null,
      google_plus: null
    },
    footer: {
      year: 2020,
      company_title: 'Vertical Restaurant Website'
    }
  },
  blogInfo: {
    name: null,
    description: null,
    display: null
  },
  url: {
    top: '#hero'
  },
  links: [
    {
      icon: 'apps',
      name: 'Top',
      address: '#hero'
    },
    {
      icon: 'apps',
      name: 'Home',
      address: '#home'
    },
    {
      name: 'About Us',
      address: '#about'
    },
    {
      name: 'Our Menu',
      address: '#featured'
    },
    {
      icon: 'bubble_chart',
      name: 'Contact Us',
      address: '#contact'
    }
  ],
  drawer: false
})

export const getters = {
  globals(state) {
    return state.globals
  },
  blogInfo(state) {
    return state.blogInfo
  },
  links(state) {
    return state.links
  },
  url(state) {
    return state.url
  },
  drawer(state) {
    return state.drawer
  }
}

export const actions = {
  toggleNav(state) {
    state.drawer = !state.drawer
  }
}
