import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";

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

const useHomeStore = create<HomeStoreState>((set, get) => ({
  ...initialValues,
  initilizeHomeStore: async () => {
    const { getReviews, getPortfolios } = get();
    await getReviews();
    await getPortfolios();
  },
  setLoading: (loading) => {
    set({ loading });
  },
  getAllBlogs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/blog/get-blogs`);
      set({ blogs: response.data.blogs });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  getReviews: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/review/get-reviews`);
      set({ reviews: response.data.reviews });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  getPortfolios: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/portfolio/get-portfolios`);
      set({ portfolios: response.data.portfolios });
    } catch (error: any) {
      console.log(error.message);
    }
  },
  reset: () => set({ blogs: [], reviews: [], portfolios: [] }),
}));

export default useHomeStore;
