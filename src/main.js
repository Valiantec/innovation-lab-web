import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap 4

// PrimeVue Components:
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';
import Breadcrumb from 'primevue/breadcrumb';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Galleria from 'primevue/galleria';
import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';

// Custom Components
import AppTriView from '../src/components/AppTriView.vue';
import HorizontalFlowPanel from '../src/components/HorizontalFlowPanel.vue';
import VerticalFlowPanel from '../src/components/VerticalFlowPanel.vue';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.component('Menubar', Menubar);
app.component('PanelMenu', PanelMenu);
app.component('Breadcrumb', Breadcrumb);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Panel', Panel);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('Galleria', Galleria);
app.component('Toast', Toast);
app.component('FileUpload', FileUpload);

app.component('AppTriView', AppTriView);
app.component('HorizontalFlowPanel', HorizontalFlowPanel);
app.component('VerticalFlowPanel', VerticalFlowPanel);

app.mount('#app');
