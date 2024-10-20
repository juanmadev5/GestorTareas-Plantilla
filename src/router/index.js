import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CombinedView from "@/views/CombinedView.vue";
import AddTask from "@/views/AddTask.vue";
import TaskList from "@/views/TaskList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/combinedview",
    name: "CombinedView",
    component: CombinedView,
  },
  {
    path: "/createtask",
    name: "AddTask",
    component: AddTask,
  },
  {
    path: "/tasklist",
    name: "TaskList",
    component: TaskList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
