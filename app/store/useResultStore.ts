import { create } from "zustand";
import type { ResultCardType } from "./type";
import { clientApi } from "~/services/http.client";

type AppState = {
  results: ResultCardType;
  loading: boolean;
};

export const useResultStore = create<AppState>((set, get) => ({
  results: {} as ResultCardType,
  loading: false,
}));

export const useResult = async ({ id, data }: { id: string; data: [] }) => {
  const res = await clientApi.post<ResultCardType>(`/replies/:${id}`, {
    body: data,
  });
  return res.data;
};
