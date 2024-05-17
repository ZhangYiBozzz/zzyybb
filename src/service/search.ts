import http from "./http";
import to from "await-to-js";

// 获取默认搜索关键词
// export const getDefaultKey = () => http.post<Res.RootObject>("/search/default");

export const getDefaultKey = async () => {
  const [err, res] = await to(http.post<Res.RootObject>("/search/default"));
  if (err) throw new Error("请求失败");
  return res.data.data.realkeyword;
};

// 指定关键字
interface searchResultRarams {
  keywords: string;
  limit?: number;
  offset?: number;
  type?: string;
}

export const searchResult = async (params: searchResultRarams) => {
  const [err, res] = await to(
    http.get<Res.RootObjectSearch>("/cloudsearch", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.result.songs;
};

// export const searchResult = (params: searchResultRarams) =>
//   http.get<Res.RootObjectSearch>("/cloudsearch", { params });
