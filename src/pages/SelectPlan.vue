<template>
    <MiddleLayout>
        <section>
            <div class="container bg-white p-5 rounded shadow">
                <h1>Select Plan</h1>
                <p>Choose the platforms you want to use</p>
                <div class="row">
                    <div class="col">
                        <input v-model="plans.plan1" @change="planChange()" type="checkbox" class="btn-check" id="plan1" autocomplete="off">
                        <label class="btn btn-outline-primary w-100 py-5" for="plan1" style="border-width: 2px">Website</label>
                    </div>
                    <div class="col">
                        <input v-model="plans.plan2" @change="planChange()" type="checkbox" class="btn-check" id="plan2" autocomplete="off">
                        <label class="btn btn-outline-primary w-100 py-5" for="plan2" style="border-width: 2px">Mobile App</label>
                    </div>
                    <div class="col">
                        <input v-model="plans.plan3" @change="planChange()" type="checkbox" class="btn-check" id="plan3" autocomplete="off">
                        <label class="btn btn-outline-primary w-100 py-5" for="plan3" style="border-width: 2px">Point of Sale</label>
                    </div>
                </div>
                <div class="text-end mt-4">
                    <g-link to="/dashboard" class="btn btn-primary btn-lg px-5" :class="{'disabled': !disabled}" :disabled="disabled">Start</g-link>
                </div>
            </div>
        </section>
    </MiddleLayout>
</template>

<script>
export default {
    name: 'SelectPlan',
    data() {
        return {
            disabled: false,
            plans: {
                plan1: false,
                plan2: false,
                plan3: false,
            }
        }
    },
    methods: {
        planChange() {
            this.disabled = (this.plans.plan1 || this.plans.plan2 || this.plans.plan3)
        }
    }
}
</script>