<template>
    <MiddleLayout>
        <div class="container bg-white p-5 rounded shadow my-auto">
            <h1>Select Package</h1>
            <p>Choose the platforms you want to use</p>
            <div class="row">
                <div class="col">
                    <input v-model="options.option1" @change="optionChange()" type="checkbox" class="btn-check" id="option1" autocomplete="off">
                    <label class="btn btn-outline-primary w-100 py-5" for="option1" style="border-width: 2px">Website</label>
                </div>
                <div class="col">
                    <input v-model="options.option2" @change="optionChange()" type="checkbox" class="btn-check" id="option2" autocomplete="off">
                    <label class="btn btn-outline-primary w-100 py-5" for="option2" style="border-width: 2px">Mobile App</label>
                </div>
                <div class="col">
                    <input v-model="options.option3" @change="optionChange()" type="checkbox" class="btn-check" id="option3" autocomplete="off">
                    <label class="btn btn-outline-primary w-100 py-5" for="option3" style="border-width: 2px">Point of Sale</label>
                </div>
            </div>
        </div>

        <div class="bg-white rounded shadow text-end px-5 py-4">
            <g-link to="/setup/store-theme" class="btn btn-primary btn-lg px-5" :class="{'disabled': !disabled}" :disabled="!disabled">Start</g-link>
        </div>
    </MiddleLayout>
</template>

<script>
export default {
    name: 'StorePackage',
    data() {
        return {
            disabled: false,
            options: {
                option1: false,
                option2: false,
                option3: false,
            }
        }
    },
    methods: {
        optionChange() {
            this.disabled = (this.options.option1 || this.options.option2 || this.options.option3)
        },
    }
}
</script>