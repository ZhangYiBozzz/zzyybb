import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  //   RouteRecordRaw类型
  routes,
});

export default router;
