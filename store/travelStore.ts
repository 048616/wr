import { defineStore } from "pinia";
import type { Travel } from "~/types/travel";
import { data } from "@/store/data";

export const useTravelsStore = defineStore({
  id: "TravelsStore",
  state: () => {
    return {
      travelsData: data as Travel[],
    };
  },
  actions: {},
  getters: {
    Countries: (state) => {
      const country: string[] = state.travelsData.map((o) => o.country);
      return country;
    },
  },
});
