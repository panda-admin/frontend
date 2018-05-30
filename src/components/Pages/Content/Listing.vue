<template>
    <div>
        <router-link class="button is-primary" :to="`/content/${$route.params.type}/new`">
            Create {{ $route.params.type }}
        </router-link>
        <b-table v-if="items.length > 0" :data="items" :columns="columns">
            <template slot-scope="props">
                <b-table-column v-for="(type, key) in type.fields" :field="key" :label="type.label">
                    {{ props.row[key] }}
                </b-table-column>

                <b-table-column field="controls" label="Controls">
                    <router-link class="button is-warning" :to="`/content/${$route.params.type}/${items.id}`">
                        Edit
                    </router-link>
                    <button class="button is-danger">Delete</button>
                </b-table-column>
            </template>
        </b-table>
    </div>
</template>

<script>
    import api from '../../../api/api';

    export default {
        data() {
            return {
                items: [],
                type: {},
            }
        },
        created() {
            this.fetch();
        },
        methods: {
            fetch() {
                let dataPromise = api.types.items(this.$route.params.type);
                let typePromise = api.types.show(this.$route.params.type);

                Promise.all([dataPromise, typePromise]).then(res => {
                    this.items = res[0].data;
                    this.type = res[1].data;
                });
            }
        },

        computed: {
            columns() {
                if(!this.type.fields) {
                    return null;
                }

                let columns = [];

                for(let key in this.type.fields) {
                    if(!this.type.fields.hasOwnProperty(key)) { continue }

                    columns.push({
                        field: key,
                        label: this.type.fields[key].label,
                    });
                }

                columns.push({
                    field: 'controls',
                    label: 'Controls'
                });

                return columns;
            }
        }
    }
</script>

<style scoped>

</style>