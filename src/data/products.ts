import type { Product } from "@/types";
import { extraProducts } from "./more-products";

export const products: Product[] = [
  {
    id: "p-01",
    slug: "merino-crew-tee",
    name: "Merino Crew Tee",
    description:
      "A weightless merino crew with a clean neckline and a soft, temperature-regulating hand. Cut for an easy everyday drape.",
    details: [
      "100% extra-fine merino wool",
      "Regular fit, hits at the hip",
      "Machine wash cold, lay flat to dry",
      "Made in Portugal",
    ],
    price: 2499,
    originalPrice: 3299,
    category: "apparel",
    subcategory: "Tops",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Ivory", hex: "#F4F1EA" },
      { name: "Ink", hex: "#1A1A1A" },
      { name: "Sage", hex: "#8A9A86" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviewCount: 124,
    stock: 42,
    isNew: true,
    isFeatured: true,
    tags: ["merino", "essentials", "sale"],
  },
  {
    id: "p-02",
    slug: "waxed-field-jacket",
    name: "Waxed Field Jacket",
    description:
      "A weather-ready field jacket in waxed cotton, with a matte finish, hidden storm cuffs, and a quietly structured shoulder.",
    details: [
      "Waxed cotton shell, cotton lining",
      "Two-way zipper with storm flap",
      "Interior and exterior pockets",
      "Spot clean only",
    ],
    price: 12990,
    category: "apparel",
    subcategory: "Outerwear",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Olive", hex: "#4A5240" },
      { name: "Navy", hex: "#1E2A3A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviewCount: 67,
    stock: 18,
    isFeatured: true,
    isBestseller: true,
    tags: ["outerwear", "bestseller"],
  },
  {
    id: "p-03",
    slug: "straight-selvedge-jean",
    name: "Straight Selvedge Jean",
    description:
      "A straight-leg selvedge denim with a mid rise and a raw indigo that will fade uniquely with wear.",
    details: [
      "13.5 oz Japanese selvedge denim",
      "Mid rise, straight leg",
      "Button fly",
      "Wash cold, hang dry",
    ],
    price: 7990,
    category: "apparel",
    subcategory: "Denim",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [{ name: "Indigo", hex: "#2C3E6B" }],
    sizes: ["28", "30", "32", "34", "36"],
    rating: 4.7,
    reviewCount: 89,
    stock: 31,
    isBestseller: true,
    tags: ["denim", "selvedge"],
  },
  {
    id: "p-04",
    slug: "silk-column-dress",
    name: "Silk Column Dress",
    description:
      "A bias-cut silk column with a fluid drape and a discreet side slit. Evening-ready, effortless by day.",
    details: [
      "100% silk charmeuse",
      "Bias cut, midi length",
      "Concealed back zip",
      "Dry clean only",
    ],
    price: 14990,
    originalPrice: 17990,
    category: "apparel",
    subcategory: "Dresses",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Champagne", hex: "#E8D5B7" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviewCount: 41,
    stock: 12,
    isNew: true,
    isFeatured: true,
    tags: ["silk", "evening", "sale"],
  },
  {
    id: "p-05",
    slug: "heavyweight-hoodie",
    name: "Heavyweight Hoodie",
    description:
      "A 480gsm loopback hoodie with a dropped shoulder, double-lined hood, and a quiet, architectural volume.",
    details: [
      "Organic cotton loopback",
      "Kangaroo pocket",
      "Rib cuffs and hem",
      "Machine wash cold",
    ],
    price: 4590,
    category: "apparel",
    subcategory: "Knitwear",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52d838d?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Heather", hex: "#C8C4BB" },
      { name: "Charcoal", hex: "#3A3A3A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviewCount: 203,
    stock: 54,
    isFeatured: true,
    tags: ["hoodie", "essentials"],
  },
  {
    id: "p-06",
    slug: "linen-overshirt",
    name: "Linen Overshirt",
    description:
      "A mid-weight linen overshirt that works as a light jacket. Unlined, with a camp collar and dual chest pockets.",
    details: [
      "100% European linen",
      "Relaxed fit",
      "Mother-of-pearl buttons",
      "Wash cold, steam to finish",
    ],
    price: 5990,
    category: "apparel",
    subcategory: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Sand", hex: "#D4C4A8" },
      { name: "Sky", hex: "#A8B8C8" },
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviewCount: 58,
    stock: 27,
    isNew: true,
    tags: ["linen", "layering"],
  },
  {
    id: "p-07",
    slug: "city-runner-sneaker",
    name: "City Runner Sneaker",
    description:
      "A low-profile runner in tumbled leather with a cushioned footbed and a gum sole that stays quiet on the street.",
    details: [
      "Full-grain leather upper",
      "Ortholite footbed",
      "Rubber cupsole",
      "Wipe clean",
    ],
    price: 8990,
    originalPrice: 10990,
    category: "footwear",
    subcategory: "Sneakers",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "White", hex: "#F5F5F5" },
      { name: "Crimson", hex: "#C41E3A" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    rating: 4.8,
    reviewCount: 312,
    stock: 40,
    isBestseller: true,
    isFeatured: true,
    tags: ["sneakers", "sale"],
  },
  {
    id: "p-08",
    slug: "chelsea-boot",
    name: "Chelsea Boot",
    description:
      "A lean Chelsea in burnished calf, with elastic side gores and a stacked leather heel. Built to last a decade.",
    details: [
      "Italian calf leather",
      "Goodyear welt",
      "Leather sole",
      "Use a cedar tree between wears",
    ],
    price: 15990,
    category: "footwear",
    subcategory: "Boots",
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Cognac", hex: "#8B5A2B" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.9,
    reviewCount: 76,
    stock: 16,
    isFeatured: true,
    tags: ["boots", "leather"],
  },
  {
    id: "p-09",
    slug: "minimal-loafer",
    name: "Minimal Loafer",
    description:
      "An unlined penny loafer with a rounded toe and a flexible leather sole. Barefoot-friendly in warmer months.",
    details: [
      "Unlined calf leather",
      "Penny strap",
      "Leather sole",
      "Condition twice a season",
    ],
    price: 11990,
    category: "footwear",
    subcategory: "Loafers",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [{ name: "Tan", hex: "#C4A574" }],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.6,
    reviewCount: 44,
    stock: 22,
    isNew: true,
    tags: ["loafers", "leather"],
  },
  {
    id: "p-10",
    slug: "classic-chrono",
    name: "Classic Chrono",
    description:
      "A 40mm automatic chronograph with a sunburst dial, sapphire crystal, and a quick-release leather strap.",
    details: [
      "316L stainless steel case",
      "Sapphire crystal",
      "5 ATM water resistance",
      "Italian leather strap",
    ],
    price: 24990,
    category: "accessories",
    subcategory: "Watches",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Gold", hex: "#C9A227" },
    ],
    rating: 4.9,
    reviewCount: 91,
    stock: 9,
    isBestseller: true,
    isFeatured: true,
    tags: ["watch", "bestseller"],
  },
  {
    id: "p-11",
    slug: "acetate-sunglasses",
    name: "Acetate Sunglasses",
    description:
      "Hand-polished acetate frames with CR-39 lenses and a medium fit. Designed in collaboration with an independent atelier.",
    details: [
      "Mazzucchelli acetate",
      "UV400 protection",
      "Includes hard case",
      "Made in Italy",
    ],
    price: 6490,
    category: "accessories",
    subcategory: "Eyewear",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Tortoise", hex: "#6B3E26" },
      { name: "Black", hex: "#111111" },
    ],
    rating: 4.7,
    reviewCount: 138,
    stock: 33,
    isFeatured: true,
    tags: ["eyewear"],
  },
  {
    id: "p-12",
    slug: "structured-tote",
    name: "Structured Tote",
    description:
      "A structured tote in pebble-grain leather, with a zip-top, laptop sleeve, and a silhouette that holds its shape.",
    details: [
      "Pebble-grain cowhide",
      "Fits a 14-inch laptop",
      "Detachable shoulder strap",
      "Wipe with a damp cloth",
    ],
    price: 13990,
    category: "accessories",
    subcategory: "Bags",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    rating: 4.8,
    reviewCount: 72,
    stock: 14,
    isNew: true,
    isFeatured: true,
    tags: ["bag", "leather"],
  },
  {
    id: "p-13",
    slug: "canvas-backpack",
    name: "Canvas Backpack",
    description:
      "A waxed canvas pack with leather trim, a padded laptop sleeve, and hardware that will patina rather than peel.",
    details: [
      "Waxed canvas, vegetable-tanned trim",
      "16-inch laptop sleeve",
      "YKK zippers",
      "Spot clean",
    ],
    price: 7490,
    category: "accessories",
    subcategory: "Bags",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Olive", hex: "#556B2F" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    rating: 4.6,
    reviewCount: 55,
    stock: 21,
    tags: ["bag", "travel"],
  },
  {
    id: "p-14",
    slug: "signature-eau-de-parfum",
    name: "Signature Eau de Parfum",
    description:
      "A woody-citrus composition of bergamot, vetiver, and warm cedar. Discreet in the morning, present by evening.",
    details: [
      "50ml eau de parfum",
      "Notes: bergamot, vetiver, cedar",
      "Alcohol denat., parfum",
      "Made in Grasse",
    ],
    price: 4990,
    category: "accessories",
    subcategory: "Fragrance",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [{ name: "Clear", hex: "#EDE8E0" }],
    rating: 4.8,
    reviewCount: 187,
    stock: 48,
    isBestseller: true,
    tags: ["fragrance"],
  },
  {
    id: "p-15",
    slug: "lounge-armchair",
    name: "Lounge Armchair",
    description:
      "A compact lounge chair in bouclé with a solid oak frame. Designed for reading corners and quiet rooms.",
    details: [
      "Bouclé upholstery, oak frame",
      "Kiln-dried hardwood",
      "Spot clean fabric",
      "Assembled in 15 minutes",
    ],
    price: 28990,
    category: "home",
    subcategory: "Seating",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Ivory", hex: "#F3EFE7" },
      { name: "Taupe", hex: "#8B7E74" },
    ],
    rating: 4.7,
    reviewCount: 29,
    stock: 6,
    isFeatured: true,
    isNew: true,
    tags: ["furniture", "home"],
  },
  {
    id: "p-16",
    slug: "ceramic-table-lamp",
    name: "Ceramic Table Lamp",
    description:
      "A hand-thrown ceramic base with a linen shade. Soft, directional light for desks and bedside tables.",
    details: [
      "Glazed stoneware base",
      "Natural linen shade",
      "E27, 40W max",
      "Wipe with a dry cloth",
    ],
    price: 5490,
    category: "home",
    subcategory: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    ],
    colors: [
      { name: "Stone", hex: "#D9D2C5" },
      { name: "Ink", hex: "#2A2A2A" },
    ],
    rating: 4.5,
    reviewCount: 38,
    stock: 19,
    tags: ["lighting", "home"],
  },
  ...extraProducts,
];

export const getProductCount = (slug: string) =>
  slug === "for-you" || slug === "all"
    ? products.length
    : products.filter((p) => p.category === slug).length;

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);

export const getNewProducts = () => products.filter((p) => p.isNew);

export const getBestsellers = () => products.filter((p) => p.isBestseller);

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);

export const searchProducts = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
};
