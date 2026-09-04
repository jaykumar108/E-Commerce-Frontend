export { products, getProductBySlug, getProductById, getFeaturedProducts, getNewProducts, getBestsellers, getRelatedProducts, searchProducts, getProductCount } from "./products";
export { categories } from "./categories";
export { featuredCategories, categoryHref } from "./categories";
export { testimonials } from "./testimonials";
export { heroSlides, promoBanners } from "./banners";
export { reviews, getReviewsByProductId } from "./reviews";

export const SITE = {
  name: "Velora",
  tagline: "Considered clothing & objects",
  announcement: "Free shipping on orders over ₹2,999  ·  Easy 14-day returns",
  email: "hello@velora.store",
  phone: "+91 22 4000 1200",
  address: "12, Turner Road, Bandra West, Mumbai 400050",
} as const;
