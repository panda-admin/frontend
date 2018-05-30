<template>
    <aside class="menu">
        <p class="menu-label">
            Dashboard
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/">Dashboard</router-link>
            </li>
        </ul>
        <p class="menu-label">
            Content Types
        </p>
        <ul class="menu-list">
            <li v-for="type in types">
                <router-link :to="`/content/${type.slug}`">{{ type.title }}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('fetchTypes');
        },

        computed: {
            types() {
                return this.$store.state.types;
            }
        }
    }
</script>

<style scoped></style>
