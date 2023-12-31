import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { 
    faDog, 
    faCat, 
    faHome, 
    faKey, 
    faSun, 
    faSuitcase, 
    faSearch, 
    faPaw, 
    faMapMarker 
} from '@fortawesome/free-solid-svg-icons'

library.add(faDog)
library.add(faCat)
library.add(faHome)
library.add(faKey)
library.add(faSun)
library.add(faSuitcase)
library.add(faSearch)
library.add(faPaw)
library.add(faMapMarker)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(ElementPlus).mount('#app')

