<template>
  <h1>hello,world</h1>
  <van-button @click="emit('abc', 123, 'CBA')">触发abc</van-button>
</template>
<script setup lang="ts">
// import { ref, withDefaults, defineProps, defineEmits } from "vue";
// const props1 = defineProps({});
export interface props {
  count: number[];
  type: "a" | "b";
  index?: number;
}
// type Prpostype = {
//   count: number[];
//   type: "a" | "b";
//   index?: number;
// };

// 使用withDefaults有默认值 interface 从<>拿出来
const props = withDefaults(defineProps<props>(), {
  count: () => [1, 2, 3],
  index: 1,
  type: "a",
});

console.log(props.count, props.type);
// 如何为组件的事件标注
const emit = defineEmits<{
  // 定义了一个abc的自定义事件 并且不用给abc事件的回调函数传递参数
  // (event: "abc", id: number, title: string): void;
  abc: [id: number, title: string];
}>();

const count = ref();
</script>
<style scoped></style>
