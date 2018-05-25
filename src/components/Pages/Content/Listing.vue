<template>
    <div>
        <b-table v-if="items.length > 0" :data="items" :columns="columns"></b-table>
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

                return columns;
            }
        }
    }
</script>

<style scoped>

</style>