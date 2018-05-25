<template>
    <div id="app" class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <Sidebar />
                </div>

                <div class="column is-9">
                    <router-view :key="$route.path" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Base/Sidebar'

    export default {
        components: {
            'Sidebar': Sidebar
        }
    }
</script>
