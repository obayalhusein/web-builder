<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <g-link to="/">
                        <img src="/makane.svg">
                    </g-link>
                </v-col>
                <v-col class="text-end">
                    <v-btn text>Faq</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <h1>Page content</h1>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Homepage',
}
</script>