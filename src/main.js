import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import 'v-calendar/dist/style.css';

import { SetupCalendar } from 'v-calendar';

createApp(App).use(router).use(SetupCalendar, {}).mount("#app");
