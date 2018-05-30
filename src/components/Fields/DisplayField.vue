<template>
    <b-field :label="label">
        <template v-if="value">
            {{ value }}
        </template>
    </b-field>
</template>

<script>
    export default {
        props: ['label', 'value']
    }
</script>

<style scoped>

</style>