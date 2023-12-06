import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { initializeApp } from "firebase/app";
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Movies from './views/Movies.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/movies', component: Movies},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const firebaseConfig = {
    apiKey: "AIzaSyDZNV6Z1oazi6RaG0GYtEOkmRCM9x8L8F4",
    authDomain: "vue-firebase-6f36e.firebaseapp.com",
    projectId: "vue-firebase-6f36e",
    storageBucket: "vue-firebase-6f36e.appspot.com",
    messagingSenderId: "678555207394",
    appId: "1:678555207394:web:d5d837efa0dd43e9bbc0bb",
    measurementId: "G-F8KG5ELFFY"
  };
 initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
