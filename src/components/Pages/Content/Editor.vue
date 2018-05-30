<template>
    <div>
        {{ type.title }}

        <div v-for="field in type.fields">
            {{ field.label }}
            <component :is="field.component"></component>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {}
            }
        },

        mounted() {

        },

        computed: {
            type() {
                return this.$store.getters.getTypeBySlug(this.$route.params.type);
            }
        }
    }
</script>

<style scoped>

</style>