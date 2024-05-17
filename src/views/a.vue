<template>
  <h1>Page A👀</h1>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <van-button type="primary">测试button</van-button>
  <HelloWorld :count="[123]" type="a" @abc="abcHander" />
  <!-- <HelloWorld @abc="abcHander(22)" /> -->
</template>
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { useUserStore } from "@/store";
const userStore = useUserStore();
console.log(userStore.username);

const abcHander = (id: number, title: string) =>
  console.log(`abc has been called! (id:${id}) [title: ${title}]`);
</script>
