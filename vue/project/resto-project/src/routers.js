import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
import AddRestaurant from "./components/Add.vue";
import UpdateRestaurant from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "AddRestaurant",
    component: AddRestaurant,
    path: "/add",
  },
  {
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
