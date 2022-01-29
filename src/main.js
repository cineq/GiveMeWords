import { createApp, Vue } from 'vue'
import App from './App.vue'
import MaterialKit from "./assets/js/plugins/material-kit.js"
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

Vue.use(MaterialKit)

createApp(App).use(store).use(router).mount('#app')
