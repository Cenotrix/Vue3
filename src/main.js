import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import "./assets/style.css"
import "../node_modules/normalize-css/normalize"
// import "../../node_modules/normalize-css/normalize.css"

// PrimeVue
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

const app = createApp(App)

app.use(router)

app.use(PrimeVue, { ripple: true })

app.mount('#app')

// createApp(App).use(router).app.mount('#app')
