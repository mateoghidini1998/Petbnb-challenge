import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faDog, faCat, faHome, faKey, faSun, faSuitcase, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faDog)
library.add(faCat)
library.add(faHome)
library.add(faKey)
library.add(faSun)
library.add(faSuitcase)
library.add(faSearch)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

