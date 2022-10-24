<template>
  <v-app>
      <v-app-bar class="px-16" absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
          <v-toolbar-title>
              <g-link to="/dashboard">
                  <img src="/makane.svg">
              </g-link>
          </v-toolbar-title>

          <v-btn text to="/" class="ms-10">Products</v-btn>
          <v-btn text to="/">Orders</v-btn>

          <v-spacer></v-spacer>
          
          <v-btn to="/" class="text-decoration-underline" text>batata.com</v-btn>
          <v-btn to="/" color="deep-purple accent-3" class="white--text">Publish</v-btn>
      </v-app-bar>

      <v-main id="scrolling-techniques-7" class="pt-16">
          <slot />
      </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
}
</script>