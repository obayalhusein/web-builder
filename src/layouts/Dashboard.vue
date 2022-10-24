<template>
  <v-app>
      <v-app-bar class="px-16" absolute color="grey darken-4" elevate-on-scroll scroll-target="#scrolling-techniques-7">
          <v-toolbar-title>
              <g-link to="/dashboard">
                  <img src="/makane-white.svg">
              </g-link>
          </v-toolbar-title>

          <v-btn to="/" color="white" class="ms-10" text>Products</v-btn>
          <v-btn to="/" color="white" text>Orders</v-btn>

          <v-spacer></v-spacer>
          
          <v-btn to="/" color="white" class="text-decoration-underline" text>batata.com</v-btn>
          <v-btn to="/" color="white">Publish</v-btn>
      </v-app-bar>

      <v-main id="scrolling-techniques-7" class="pt-16 grey lighten-3">
          <slot />
      </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
}
</script>