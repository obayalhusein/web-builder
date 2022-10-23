<template>
    <MiddleLayout>
        <div class="container bg-white p-5 rounded shadow my-auto">
            <h1>Get your business up and running</h1>
            <p>What’s the name of your store?</p>
            <div class="form-floating mb-3">
                <input v-model="storeName" type="text" class="form-control" id="floatingInput" placeholder=" ">
                <label for="floatingInput">Enter your store’s name</label>
                <small class="d-block text-muted mt-3"><i class="fa-regular fa-lightbulb"></i>&nbsp; You can edit any detail anytime</small>
            </div>
        </div>

        <div class="bg-white rounded shadow text-end px-5 py-4">
            <g-link to="/setup/store-package" class="btn btn-primary btn-lg px-5" :class="{'disabled': !storeName}" :disabled="!storeName">Next</g-link>
        </div>
    </MiddleLayout>
</template>

<script>
export default {
    name: 'StoreName',
    data() {
        return {
            storeName: '',
        }
    },
}
</script>