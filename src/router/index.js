import Vue from 'vue'
import Router from 'vue-router'
import {Dashboard, ContentListing, ContentEditor} from '../components/Pages'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/content/:type',
            name: 'content.listing',
            component: ContentListing
        },
        {
            path: '/content/:type/new',
            name: 'content.new',
            component: ContentEditor
        }
    ]
})
