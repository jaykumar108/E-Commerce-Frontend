export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  details: string[];
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  images: string[];
  colors: ProductColor[];
  sizes?: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  tags: string[];
};

export type CategoryIcon =
  | "bag"
  | "shirt"
  | "smartphone"
  | "laptop"
  | "lipstick"
  | "lamp"
  | "tv"
  | "toy"
  | "food"
  | "helmet"
  | "sports"
  | "armchair"
  | "book"
  | "scooter"
  | "watch"
  | "footprints";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  icon: CategoryIcon;
  featured?: boolean;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
};

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  align?: "left" | "right";
};

export type Review = {
  id: string;
  productId: string;
  name: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
};

export type NavLink = {
  name: string;
  href: string;
};
