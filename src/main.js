import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import router from "./router/router";
import { registerGlobalComponents } from "./utils/import";
library.add(fas, fab, far);

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
