import type { RouteRecordRaw } from "vue-router";
import A from "@/views/a.vue";
import B from "@/views/b.vue";
import search from "@/views/search.vue";
import list from "@/views/list.vue";
// 数组写法
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/list" },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/search", component: search },
  { path: "/list", component: list },
];

export default routes;
