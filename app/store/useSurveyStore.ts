import { create } from "zustand";
import type { Root } from "./type";
import { serverApi } from "~/services/http.server";

type AppState = {
  posts: Root;
  byId: {};
  loading: boolean;
};

export const useSurveyStore = create<AppState>((set, get) => ({
  posts: {} as Root,
  loading: false,
  byId: {},
}));

export const useSurvey = async (page: number = 1) => {
  const res = await serverApi.get<Root>(`/surveys?page=${page}`);
  return res.data;
};

export const useSurveyById = async (slug: string) => {
  const res = await serverApi.get<{}>(`/surveys/single/${slug}`);
  console.log(res, "res");
  return res.data;
};
