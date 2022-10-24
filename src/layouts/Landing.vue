<template>
    <v-app>
        <v-app-bar class="px-16" absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
            <v-toolbar-title>
                <g-link to="/">
                    <img src="/makane.svg">
                </g-link>
            </v-toolbar-title>

            <v-btn text to="/" class="ms-10">Homepage</v-btn>
            <v-btn text to="/pricing">Pricing</v-btn>
            <v-btn text to="/about">About</v-btn>
            <v-btn text to="/contact">Contact</v-btn>

            <v-spacer></v-spacer>
            
            <v-btn text to="/login">Login</v-btn>
            <v-btn to="/setup/store-category" color="deep-purple accent-3" class="white--text">Start free trail</v-btn>
        </v-app-bar>

        <v-main id="scrolling-techniques-7" class="pt-16">
            <slot />
        </v-main>

        <v-footer app>
            Footer
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'LandingLayout',
}
</script>