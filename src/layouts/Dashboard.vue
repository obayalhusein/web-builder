<template>
  <v-app>
      <v-app-bar app fixed color="grey darken-4" extension-height="64" elevation="4">
          <v-toolbar-title class="ms-16 me-10">
              <g-link to="/dashboard">
                  <img src="/makane-white.svg" width="100">
              </g-link>
          </v-toolbar-title>

          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" dark text>
                Platform
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Website</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Mobile App</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>POS</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          
          <v-btn dark text>Products</v-btn>
          <v-btn dark text>Orders</v-btn>

          <v-spacer></v-spacer>
          
          <v-btn dark text icon><i class="fa-solid fa-bell"></i></v-btn>
          <v-btn dark text icon><i class="fa-solid fa-gear"></i></v-btn>
          <v-btn dark text icon><i class="fa-solid fa-circle-info"></i></v-btn>

          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" dark text class="me-16">email@domain.com &nbsp;&nbsp;<i class="fa-solid fa-caret-down"></i></v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <template v-slot:extension class="px-0">
            <v-container class="white px-16" fluid>
              <div class="d-flex">
                <div style="width: 200px">
                  <v-select :items="items" label="Page" class="ms-10" hide-details dense outlined />
                </div>
                <v-btn text><i class="fa-solid fa-display"></i></v-btn>
                <v-btn text><i class="fa-solid fa-mobile-screen-button"></i></v-btn>

                <v-spacer></v-spacer>

                <v-btn to="/website" target="_blank" text>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;
                  <span class="text-decoration-underline">batata.com</span>
                </v-btn>
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
      items: ['Homepage', 'About', 'Contact', 'Products'],
    }
  },
}
</script>