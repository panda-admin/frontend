<template>
    <b-field :label="label">
        <b-input :value="value" @change="emitInput"></b-input>
    </b-field>
</template>

<script>
    export default {
        props: ['label', 'value'],

        methods: {
            emitInput(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>