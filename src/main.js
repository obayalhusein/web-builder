// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import DashboardLayout from '~/layouts/Dashboard.vue'
import MiddleLayout from '~/layouts/Middle.vue'
import '/node_modules/@fortawesome/fontawesome-free/css/all.css'
import '~/assets/scss/app.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('DashboardLayout', DashboardLayout)
  Vue.component('MiddleLayout', MiddleLayout)
}
