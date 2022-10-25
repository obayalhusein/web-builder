<template>
  <LandingLayout>
    <section>
      <v-container>
        <v-row>
          <v-col>
            <h1 class="display-4">Start selling <br><span class="deep-purple--text text--accent-3">online</span> now!</h1>
            <p>Build your own e-commerce website and mobile app in few minutes</p>
            <div class="d-flex align-items-center">
              <v-text-field label="Your email or phone" hide-details outlined>
              </v-text-field>
              <v-btn to="/setup/store-category" color="deep-purple accent-3" class="white--text my-0" x-large>Get Started</v-btn>
            </div>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </section>
  </LandingLayout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Homepage'
  }
}
</script>