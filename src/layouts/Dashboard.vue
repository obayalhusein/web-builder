<template>
  <v-app>
      <v-app-bar app fixed color="grey darken-4" extension-height="64" elevation="4">
          <v-toolbar-title class="ms-16 me-10">
              <g-link to="/dashboard">
                  <img src="/makane-white.svg" width="100">
              </g-link>
          </v-toolbar-title>

          <v-btn dark text>Platform</v-btn>
          <v-btn dark text>Products</v-btn>
          <v-btn dark text>Orders</v-btn>

          <v-spacer></v-spacer>
          
          <v-btn dark text>Notifcations</v-btn>
          <v-btn dark text>Settings</v-btn>
          <v-btn dark text class="me-16">Help</v-btn>

          <template v-slot:extension class="px-0">
            <v-container class="white px-16" fluid>
              <div class="d-flex">
                <div style="width: 200px">
                  <v-select :items="items" label="Page" class="ms-10" hide-details dense outlined />
                </div>
                <v-btn text>M</v-btn>
                <v-btn text>D</v-btn>

                <v-spacer></v-spacer>

                <v-btn to="/website" class="text-decoration-underline" text>batata.com</v-btn>
                <v-btn to="/" color="grey darken-4" dark>Publish</v-btn>
              </div>
            </v-container>
        </template>
      </v-app-bar>

      <v-main class="pt-16 mt-16 grey lighten-3">
          <slot />
      </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }
  },
}
</script>