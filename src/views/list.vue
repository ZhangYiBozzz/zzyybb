<template>
  <div class="bg-[#f2f5fb]">
    <div
      class="h-[14vw] flex items-center justify-between text-[#333] px-[6vw]"
    >
      <van-icon name="arrow-left" class="w-[5vw]" />
      <h1 class="text-[5vw] font-bold">排行榜</h1>
      <div class="w-[5vw]"></div>
    </div>
    <van-tabs
      v-model:active="activeName"
      scrollspy
      sticky
      color="red"
      background="#f2f5fb"
    >
      <div class="w-full px-[6vw] text-[#333]">
        <van-tab title="官方" name="a">
          <div class="h-[40vw]">
            <p class="text-[5vw] font-bold">榜单推荐</p>
            <div class="flex justify-between">
              <img
                :src="ToplistDetail?.[0].coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-[2.7vw]"
              />
              <img
                :src="ToplistDetail?.[25].coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-[2.7vw]"
              />
              <img
                :src="ToplistDetail?.[2].coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-[2.7vw]"
              />
            </div>
          </div>
          <div>
            <p class="text-[5vw] font-bold">官方榜</p>
            <div v-for="item in ToplistDetail" :key="item.id">
              <div
                v-if="item.tracks.length > 0"
                class="w-[90vw] h-[35vw] rounded-[3vw] bg-white mt-[5vw] p-[4vw]"
              >
                <p class="flex justify-between">
                  <span class="text-[4.4vw] font-bold"> {{ item.name }}</span>
                  <span class="text-[3vw] text-[rgb(153,157,167)]">{{
                    item.updateFrequency
                  }}</span>
                </p>
                <div class="flex items-center absolute">
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[17vw] h-[17vw] rounded-md absolute z-10"
                  />
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[13vw] h-[13vw] rounded-md absolute left-[6vw] bottom-[2.8vw] opacity-25"
                  />
                  <div class="ml-[18vw]">
                    <div
                      v-for="(index, i) in item.tracks"
                      :key="i"
                      class="flex items-center h-[8vw] ml-[4.7vw]"
                    >
                      <span class="text-[3.2vw] font-bold">{{ i + 1 }}</span>
                      <p class="w-[50vw] overflow-hidden flex ml-[1vw]">
                        <span
                          class="text-[3.2vw]"
                          style="white-space: nowrap; text-overflow: ellipsis"
                          >{{ index.first }}</span
                        >
                        <span class="text-[3.5vw] text-[#999da7]">-</span>
                        <span
                          class="text-[3.5vw] text-[#999da7]"
                          style="white-space: nowrap; text-overflow: ellipsis"
                          >{{ index.second }}</span
                        >
                      </p>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Mv -->
            <div
              class="w-[90vw] h-[35vw] rounded-[3vw] bg-white mt-[5vw] p-[4vw]"
            >
              <p class="flex justify-between">
                <span class="text-[4.4vw] font-bold"> MV榜</span>
                <span class="text-[3vw] text-[rgb(153,157,167)]">每日更新</span>
              </p>
              <div class="absolute flex items-center">
                <img
                  :src="TopMv?.[0].cover"
                  alt=""
                  class="w-[17vw] h-[17vw] rounded-md absolute z-10"
                />
                <img
                  :src="TopMv?.[1].cover"
                  alt=""
                  class="w-[13vw] h-[13vw] rounded-md absolute left-[6vw] bottom-[2.8vw] opacity-60"
                />
                <div class="ml-[18vw]">
                  <div
                    v-for="(items, i) in TopMv"
                    :key="items.id"
                    class="flex items-center h-[8vw] ml-[4.7vw]"
                  >
                    <span class="text-[3.2vw] font-bold">{{ i + 1 }}</span>
                    <p
                      class="w-[50vw] overflow-hidden flex items-center ml-[1vw]"
                    >
                      <span
                        class="text-[3.2vw]"
                        style="white-space: nowrap; text-overflow: ellipsis"
                      >
                        {{ items.name }}</span
                      >
                      <span class="text-[3.5vw] text-[#999da7]">-</span>
                      <span
                        class="text-[3.5vw] text-[#999da7]"
                        style="white-space: nowrap; text-overflow: ellipsis"
                        >{{ items.artistName }}</span
                      >
                    </p>
                    <span v-if="items.lastRank > 0" class="text-red-300"
                      ><van-icon name="arrow-down"
                    /></span>
                    <span v-else class="text-blue-300"
                      ><van-icon name="arrow-up"
                    /></span>
                  </div>
                </div>
              </div>
            </div></div
        ></van-tab>
        <van-tab title="精选" name="b">
          <div class="mt-[4vw]">
            <p class="text-[4.4vw] font-bold">全球榜</p>
            <div class="flex flex-wrap">
              <div v-for="item in ToplistDetail" :key="item.id">
                <div
                  v-if="
                    item.userId == 48333 ||
                    item.userId == 48171 ||
                    item.userId == 1589393 ||
                    item.userId == 48160 ||
                    item.userId == 5190793 ||
                    item.userId == 6790397
                  "
                >
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[28vw] h-[28vw] mt-[2vw] ml-[1.2vw] rounded-[2.6vw]"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- 特色 -->
          <div class="mt-[4vw]">
            <p class="text-[4.4vw] font-bold">特色榜</p>
            <div class="flex flex-wrap">
              <div v-for="item in ToplistDetail" :key="item.id">
                <div v-if="item.userId == 7943333146">
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[28vw] h-[28vw] mt-[2vw] ml-[1.2vw] rounded-[2.6vw]"
                  />
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </div>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { getToplistDetail, getPlaylistDetail, gettopMv } from "@/service";
import { useRequest } from "vue-request";

// 使用useRequest获取数据，并解构出loading和data属性
const { data: ToplistDetail } = useRequest(getToplistDetail, {});

// getPlaylistDetail; 歌

const { data: PlaylistDetail } = useRequest(
  () => getPlaylistDetail({ id: 19723756, s: 10 }),
  {}
);

const { data: TopMv } = useRequest(() => gettopMv({ limit: 3, area: "内地" }));

// 使用watchEffect来观察ToplistDetail的变化
watchEffect(() => {
  console.log(ToplistDetail.value);
});

const activeName = ref("b");
</script>
<style></style>
