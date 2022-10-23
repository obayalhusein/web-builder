<template>
    <MiddleLayout>
        <div class="container bg-white p-5 rounded shadow my-auto">
            <h1>Select Theme</h1>
            <p>Choose the design that fits you</p>
            <div class="row">
                <div class="col">
                    <input @change="optionChange()" type="radio" class="btn-check" name="options" id="option1" autocomplete="off">
                    <label class="btn btn-outline-primary w-100 py-5" for="option1" style="border-width: 2px">Theme 1</label>
                </div>
                <div class="col">
                    <input @change="optionChange()" type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                    <label class="btn btn-outline-primary w-100 py-5" for="option2" style="border-width: 2px">Theme 2</label>
                </div>
                <div class="col">
                    <input @change="optionChange()" type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
                    <label class="btn btn-outline-primary w-100 py-5" for="option3" style="border-width: 2px">Theme 3</label>
                </div>
            </div>
        </div>

        <div class="bg-white rounded shadow text-end px-5 py-4">
            <g-link to="/dashboard" class="btn btn-primary btn-lg px-5" :class="{'disabled': !disabled}" :disabled="!disabled">Start</g-link>
        </div>
    </MiddleLayout>
</template>

<script>
export default {
    name: 'StoreTheme',
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
            this.disabled = false;
            document.querySelectorAll('.btn-check').forEach(el => {
                if(el.checked) {
                    this.disabled = true
                }
            });
        },
    }
}
</script>