// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import LandingLayout from '~/layouts/Landing.vue'
import DashboardLayout from '~/layouts/Dashboard.vue'
import MiddleLayout from '~/layouts/Middle.vue'
import '/node_modules/@fortawesome/fontawesome-free/css/all.css'
import '~/assets/scss/app.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });
  
  const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('LandingLayout', LandingLayout)
  Vue.component('DashboardLayout', DashboardLayout)
  Vue.component('MiddleLayout', MiddleLayout)
}
