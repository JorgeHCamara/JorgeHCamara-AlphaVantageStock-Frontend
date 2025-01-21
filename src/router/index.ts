import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import StockGrid from "@/components/StockGrid.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StockGrid",
    component: StockGrid,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
