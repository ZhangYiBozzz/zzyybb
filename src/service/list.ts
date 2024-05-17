import http from "./http";
import to from "await-to-js";

// 榜单 /toplist/detail
// /toplist/detail 排行榜
export const getToplistDetail = async () => {
  const [err, res] = await to(http.post<Res.ToplistDetail>("/toplist/detail"));
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// /playlist/detail

interface PlaylistDetailRarams {
  id: number;
  s?: number;
}

export const getPlaylistDetail = async (params: PlaylistDetailRarams) => {
  const [err, res] = await to(
    http.get<Res.RootObjectPlaylistDetail>("/playlist/detail", { params })
  );
  if (err) throw new Error("请求失败");
  return res;
};

// /top/mv top推荐Mv

interface TopMvRarams {
  limit?: number;
  area?: string;
  offset?: number;
}

export const gettopMv = async (params: TopMvRarams) => {
  const response = await http.post<Res.RootObjectTopMv>("/top/mv", null, {
    params: {
      limit: params.limit,
      area: params.area,
      offset: params.offset,
    },
  });
  if (!response) throw new Error("请求失败");
  return response.data.data;
};
