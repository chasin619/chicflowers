declare global {
  type HomeStoreState = {
    blogs: any[];
    reviews: any[];
    portfolios: any[];
    loading: boolean;
    setLoading: (loading: boolean) => void;
    initilizeHomeStore: () => Promise<void>;
    getAllBlogs: () => Promise<void>;
    getReviews: () => Promise<void>;
    getPortfolios: () => Promise<void>;
    reset: () => void;
  };
}
export {};
