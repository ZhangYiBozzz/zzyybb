<template>
  <div>search👀👀👀👀</div>
  <input type="text" :placeholder="DefaultKey" v-model="searchKeyword" />
  <van-button @click="runsearch">搜索</van-button>
  <!-- <van-button @click="runSearchResult({ keywords: '海阔' })">搜索</van-button> -->
  <ul>
    <li v-for="song in songs" :key="song.id">{{ song.name }}</li>
  </ul>
</template>
<script setup lang="ts">
import { getDefaultKey, searchResult, getToplistDetail } from "@/service";
import { useRequest } from "vue-request";

const { data: DefaultKey } = useRequest(getDefaultKey, {});

// 手动请求 run +  manual: true 就是手动
const searchKeyword = ref();
const runsearch = () => {
  console.log(searchKeyword.value);
  runSearchResult({ keywords: searchKeyword.value });
};

const { data: songs, run: runSearchResult } = useRequest(searchResult, {
  manual: true,
});

// 榜
const { data: ToplistDetail } = useRequest(getToplistDetail, {});

watchEffect(() => {
  console.log(DefaultKey.value);
  console.log(ToplistDetail.value);
});

// const DefaultKey = ref();

// getDefaultKey().then((res) => {
//   DefaultKey.value = res.data.data.realkeyword;
//   console.log(DefaultKey.value);
// });

// const songs = ref<Res.Song[]>();
// searchResult({ keywords: "海阔天空" }).then((res) => {
//   songs.value = res.data.result.songs;
//   console.log(res.data.result.songs);
// });
</script>
