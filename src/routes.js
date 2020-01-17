import VueRouter from "vue-router";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Car from "./components/Car";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/cars",
      component: Cars
    },
    {
      path: "/cars/:id",
      component: Car
    }
  ],
  mode: "history"
});
