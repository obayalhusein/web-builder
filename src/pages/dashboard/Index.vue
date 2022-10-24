<template>
    <DashboardLayout>
        <v-card class="mx-16 my-16" elevation="5">
            <Page />
        </v-card>
    </DashboardLayout>
</template>

<script>
import Page from '@/components/website/Page'

export default {
    name: 'Dashboard',
    components: { Page },
}
</script>