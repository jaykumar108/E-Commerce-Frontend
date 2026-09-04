import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-for-you",
    name: "For You",
    slug: "for-you",
    description: "A personal edit from the full catalogue.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    productCount: 16,
    icon: "bag",
  },
  {
    id: "cat-apparel",
    name: "Fashion",
    slug: "apparel",
    description: "Tailored essentials and seasonal layers.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    productCount: 6,
    icon: "shirt",
    featured: true,
  },
  {
    id: "cat-footwear",
    name: "Footwear",
    slug: "footwear",
    description: "Everyday sneakers and refined leather.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    productCount: 3,
    icon: "footprints",
    featured: true,
  },
  {
    id: "cat-mobiles",
    name: "Mobiles",
    slug: "mobiles",
    description: "Phones and everyday tech.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "smartphone",
  },
  {
    id: "cat-electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Laptops, audio, and desk gear.",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "laptop",
  },
  {
    id: "cat-beauty",
    name: "Beauty",
    slug: "beauty",
    description: "Fragrance and grooming.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "lipstick",
  },
  {
    id: "cat-home",
    name: "Home",
    slug: "home",
    description: "Quiet objects for considered spaces.",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
    productCount: 2,
    icon: "lamp",
    featured: true,
  },
  {
    id: "cat-appliances",
    name: "Appliances",
    slug: "appliances",
    description: "Kitchen and living essentials.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "tv",
  },
  {
    id: "cat-toys",
    name: "Toys & Baby",
    slug: "toys",
    description: "Play and nursery.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "toy",
  },
  {
    id: "cat-food",
    name: "Food & Health",
    slug: "food",
    description: "Pantry and wellness.",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "food",
  },
  {
    id: "cat-auto",
    name: "Auto Accessories",
    slug: "auto",
    description: "Ride-ready extras.",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "helmet",
  },
  {
    id: "cat-sports",
    name: "Sports",
    slug: "sports",
    description: "Kit for the field and the gym.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba6851?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "sports",
  },
  {
    id: "cat-furniture",
    name: "Furniture",
    slug: "furniture",
    description: "Seating and tables.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "armchair",
  },
  {
    id: "cat-books",
    name: "Books",
    slug: "books",
    description: "Reading for slower evenings.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "book",
  },
  {
    id: "cat-two-wheelers",
    name: "2 Wheelers",
    slug: "two-wheelers",
    description: "Scooters and commute gear.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    productCount: 0,
    icon: "scooter",
  },
  {
    id: "cat-accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Bags, watches, and finishing pieces.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    productCount: 5,
    icon: "watch",
    featured: true,
  },
];

export const featuredCategories = categories.filter((c) => c.featured);

export function categoryHref(slug: string) {
  if (slug === "for-you" || slug === "all") return "/shop";
  return `/shop?category=${slug}`;
}
