import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('visible', {
    beforeMount(el, binding) {
        el.style.visibility = binding.value ? 'visible' : 'hidden';
    }
})
app.mount('#app')
