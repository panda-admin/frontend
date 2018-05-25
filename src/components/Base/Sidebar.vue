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
            <li v-for="type in contentTypes">
                <router-link :to="`/content/${type.slug}`">{{ type.title }}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    import api from '../../api/api';

    export default {
        data() {
            return {
                contentTypes: []
            }
        },
        mounted() {
            api.types.index().then(res => this.contentTypes = res.data);
        }
    }
</script>

<style scoped></style>
