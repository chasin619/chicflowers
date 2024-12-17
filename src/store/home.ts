import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";

import { BASE_URL } from "@/utils/constants";
import { zustandStorage } from "./storage/storage";
import { getHeaders } from "@/utils/helpers";

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
          const headers = getHeaders();
          const response = await axios.get(`${BASE_URL}/api/blog/get-blogs`, {
            ...headers,
          });
          set({ blogs: response.data.blogs });
        } catch (error: any) {
          console.error("Error fetching blogs:", error.message);
        }
      },
      getReviews: async () => {
        try {
          const headers = getHeaders();
          const response = await axios.get(
            `${BASE_URL}/api/review/get-reviews`,
            {
              ...headers,
            }
          );
          set({ reviews: response.data.reviews });
        } catch (error: any) {
          console.error("Error fetching reviews:", error.message);
        }
      },
      getPortfolios: async () => {
        try {
          const headers = getHeaders();
          const response = await axios.get(
            `${BASE_URL}/api/portfolio/get-portfolios`,
            {
              ...headers,
            }
          );
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
