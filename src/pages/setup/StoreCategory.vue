<template>
    <MiddleLayout>
        <div class="container bg-white p-5 rounded shadow my-auto">
            <h1>What kind of business you have</h1>
            <div class="row justify-content-center mt-4">
                <div class="col col-sm-12 col-md-4" v-for="(category, index) in categories" :key="index">
                    <input @change="categoryChange()" type="radio" class="btn-check" name="category" :id="`category${index}`" autocomplete="off">
                    <label class="btn btn-outline-primary w-100" :for="`category${index}`">{{ category.title }}</label>
                </div>
            </div>
        </div>
        <div class="bg-white rounded shadow text-end px-5 py-4">
            <g-link to="/setup/store-name" class="btn btn-primary btn-lg px-5" :class="{'disabled': !disabled}" :disabled="!disabled">Start</g-link>
        </div>
    </MiddleLayout>
</template>

<script>
export default {
    name: 'StoreCategory',
    data() {
        return {
            disabled: false,
            categories: [
                {
                    title: 'Clothing',
                },
                {
                    title: 'Restaurant',
                },
                {
                    title: 'Electronics',
                },
                {
                    title: 'Toys',
                },
            ]
        }
    },
    methods: {
        categoryChange() {
            this.disabled = false;
            document.querySelectorAll('.btn-check').forEach(el => {
                if(el.checked) {
                    this.disabled = true
                }
            });
        }
    },
}
</script>