import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "./storage/storage";
import api from "@/utils/api";

interface BlogStore {
  blogs: any[];
  reviews: any[];
  portfolios: any[];
  loading: boolean;
}

const initialValues: BlogStore = {
  blogs: [],
  reviews: [],
  portfolios: [],
  loading: false,
};

const useHomeStore = create(
  persist<HomeStoreState>(
    (set, get) => ({
      ...initialValues,
      initilizeHomeStore: async () => {
        const { getReviews, getPortfolios } = get();
        await getReviews();
        await getPortfolios();
      },
      setLoading: (loading: boolean) => {
        set({ loading });
      },
      getAllBlogs: async () => {
        try {
          const response = await api.get(`/blog`);
          set({ blogs: response.data.blogs });
        } catch (error: any) {
          console.error("Error fetching blogs:", error.message);
        }
      },
      getReviews: async () => {
        try {
          const response = await api.get(`/review`);
          set({ reviews: response.data.reviews });
        } catch (error: any) {
          console.error("Error fetching reviews:", error.message);
        }
      },
      getPortfolios: async () => {
        try {
          const response = await api.get(`/portfolio`);
          set({ portfolios: response.data.portfolios });
        } catch (error: any) {
          console.error("Error fetching portfolios:", error.message);
        }
      },
      reset: () => set({ blogs: [], reviews: [], portfolios: [] }),
    }),
    {
      name: "home-store",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useHomeStore;
