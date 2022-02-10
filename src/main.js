import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

// PrimeVue Components:
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Galleria from 'primevue/galleria';
import Toast from 'primevue/toast';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.component('Menubar', Menubar);
app.component('Panel', Panel);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('Galleria', Galleria);
app.component('Toast', Toast);

app.mount('#app');
