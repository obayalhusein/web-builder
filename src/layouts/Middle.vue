<template>
    <v-app>
        <v-app-bar class="px-16" absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
            <v-toolbar-title>
                <g-link to="/">
                    <img src="/makane.svg">
                </g-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            
            <v-btn text>عربي</v-btn>
        </v-app-bar>

        <v-main id="scrolling-techniques-7" class="pt-16">
            <slot />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'MiddleLayout',
}
</script>