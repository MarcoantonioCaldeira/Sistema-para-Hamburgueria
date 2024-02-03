import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyCY2rhJO_A-Rtl0zyHZYzb1zKCckvkF-SQ",
  authDomain: "db-hamburgueria.firebaseapp.com",
  databaseURL: "https://db-hamburgueria-default-rtdb.firebaseio.com",
  projectId: "db-hamburgueria",
  storageBucket: "db-hamburgueria.appspot.com",
  messagingSenderId: "664128471172",
  appId: "1:664128471172:web:cf71c9e610cbcd21fc42d1",
  measurementId: "G-4BN8FF7K8T"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

const app = createApp(App);
const burgersRef = ref(db, 'burgers');

set(burgersRef, null);

// Agora, $db aponta para a instância do Realtime Database
app.config.globalProperties.$db = db;

app.use(router).mount('#app');
