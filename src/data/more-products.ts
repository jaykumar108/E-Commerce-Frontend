import type { Product } from "@/types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

function item(
  id: string,
  slug: string,
  name: string,
  category: string,
  subcategory: string,
  price: number,
  imageIds: string[],
  extra: Partial<Product> = {}
): Product {
  const images = imageIds.map(img);
  return {
    rating: 4.6,
    reviewCount: 48,
    stock: 22,
    tags: [category],
    colors: [{ name: "Default", hex: "#1A1A1A" }],
    description: `${name}. Dummy catalogue piece — considered materials, ready to ship as sample inventory.`,
    details: [
      "Dummy storefront inventory",
      "Standard delivery 3–6 working days",
      "14-day returns on unused items",
      "In-stock sample",
    ],
    ...extra,
    id,
    slug,
    name,
    category,
    subcategory,
    price,
    images: images.length > 1 ? images : [images[0], images[0]],
  };
}

export const extraProducts: Product[] = [
  item("p-17", "oxford-shirt", "Oxford Shirt", "apparel", "Shirts", 3490, [
    "photo-1596755094514-f87e34085b2c",
    "photo-1603252109303-2751441dd157",
  ], { isNew: true, sizes: ["S", "M", "L", "XL"], colors: [{ name: "White", hex: "#F5F5F0" }, { name: "Sky", hex: "#A8B8C8" }] }),
  item("p-18", "cashmere-scarf", "Cashmere Scarf", "apparel", "Knitwear", 5990, [
    "photo-1520903920243-00d872a2d1c9",
    "photo-1489987707025-afc232f7ea0f",
  ], { sizes: ["One size"], colors: [{ name: "Camel", hex: "#C19A6B" }, { name: "Grey", hex: "#8A8A8A" }] }),

  item("p-19", "canvas-trainer", "Canvas Trainer", "footwear", "Sneakers", 4290, [
    "photo-1549298916-b41d501d3772",
    "photo-1460353581641-37baddab0fa2",
  ], { isNew: true, sizes: ["7", "8", "9", "10", "11"], originalPrice: 5290, colors: [{ name: "White", hex: "#F4F4F4" }, { name: "Navy", hex: "#1B2A4A" }] }),
  item("p-20", "suede-derby", "Suede Derby", "footwear", "Formal", 9990, [
    "photo-1533867617858-e7b97e060509",
    "photo-1614252235316-8c857d38b5f4",
  ], { sizes: ["7", "8", "9", "10", "11"], colors: [{ name: "Taupe", hex: "#8B7E74" }] }),

  item("p-21", "aura-phone-case", "Aura Phone Case", "mobiles", "Cases", 1290, [
    "photo-1592899677977-9c10ca588bbd",
    "photo-1511707171634-5f897ff02aa9",
  ], { isNew: true, isFeatured: true, colors: [{ name: "Clear", hex: "#EDE8E0" }, { name: "Ink", hex: "#111" }] }),
  item("p-22", "compact-power-bank", "Compact Power Bank", "mobiles", "Chargers", 2490, [
    "photo-1609091839311-d5365f9ff1c5",
    "photo-1583863788434-e58a36330cf0",
  ], { isBestseller: true, colors: [{ name: "Graphite", hex: "#3A3A3A" }] }),
  item("p-23", "wireless-earbuds-mini", "Wireless Earbuds Mini", "mobiles", "Audio", 3990, [
    "photo-1590658268037-6bf12165a8df",
    "photo-1606220945770-b5b6c2c55bf1",
  ], { originalPrice: 4990, colors: [{ name: "White", hex: "#F5F5F5" }, { name: "Black", hex: "#111" }] }),

  item("p-24", "studio-headphones", "Studio Headphones", "electronics", "Audio", 8990, [
    "photo-1505740420928-5e560c06d30e",
    "photo-1484704849700-f032a568e944",
  ], { isFeatured: true, isBestseller: true, colors: [{ name: "Black", hex: "#111" }, { name: "Silver", hex: "#C0C0C0" }] }),
  item("p-25", "ultralight-laptop-sleeve", "Ultralight Laptop Sleeve", "electronics", "Accessories", 1890, [
    "photo-1496181133206-80ce9b88a853",
    "photo-1517336714731-489689fd1ca8",
  ], { isNew: true, colors: [{ name: "Grey", hex: "#8A8A8A" }, { name: "Navy", hex: "#1B2A4A" }] }),
  item("p-26", "mechanical-keyboard", "Mechanical Keyboard", "electronics", "Peripherals", 7490, [
    "photo-1511467687898-65898ea9518b",
    "photo-1587829741301-dc798b83add3",
  ], { colors: [{ name: "Cream", hex: "#E8DCC8" }, { name: "Black", hex: "#1A1A1A" }] }),

  item("p-27", "daily-serum", "Daily Serum", "beauty", "Skincare", 1890, [
    "photo-1620916566398-39f1143ab7be",
    "photo-1571781926291-c77da3b2e6aa",
  ], { isNew: true, colors: [{ name: "Clear", hex: "#F7F1E8" }] }),
  item("p-28", "matte-lipstick", "Matte Lipstick", "beauty", "Makeup", 990, [
    "photo-1586495777744-4413f21062fa",
    "photo-1522335789203-aabd1fc54bc9",
  ], { isBestseller: true, colors: [{ name: "Rose", hex: "#C08081" }, { name: "Wine", hex: "#722F37" }] }),
  item("p-29", "grooming-kit", "Grooming Kit", "beauty", "Grooming", 2490, [
    "photo-1596462502278-27bfdc403348",
    "photo-1522338242992-e1a549cf0d4f",
  ], { colors: [{ name: "Nude", hex: "#E6C9A8" }] }),

  item("p-30", "linen-throw", "Linen Throw", "home", "Textiles", 3290, [
    "photo-1586023492125-27b2c045efd7",
    "photo-1616628188524-78d27da7b818",
  ], { isNew: true, colors: [{ name: "Sand", hex: "#D4C4A8" }, { name: "Sage", hex: "#8A9A86" }] }),
  item("p-31", "stoneware-vase", "Stoneware Vase", "home", "Decor", 2190, [
    "photo-1578500494198-246f612d3b3d",
    "photo-1484101403633-562f891dc89a",
  ], { colors: [{ name: "Clay", hex: "#C4A484" }, { name: "Ink", hex: "#2A2A2A" }] }),

  item("p-32", "drip-coffee-maker", "Drip Coffee Maker", "appliances", "Kitchen", 5490, [
    "photo-1517668808822-9ebb02f2a0e6",
    "photo-1495474472287-4d71bcdd2085",
  ], { isFeatured: true, colors: [{ name: "Steel", hex: "#C0C0C0" }, { name: "Black", hex: "#1A1A1A" }] }),
  item("p-33", "compact-air-purifier", "Compact Air Purifier", "appliances", "Living", 8990, [
    "photo-1585771724684-38269d6639fd",
    "photo-1556911220-bff31c812dba",
  ], { isNew: true, colors: [{ name: "White", hex: "#F4F4F4" }] }),
  item("p-34", "hand-blender", "Hand Blender", "appliances", "Kitchen", 2490, [
    "photo-1570222094114-d054a817e56b",
    "photo-1585659722983-3a675dabf23d",
  ], { originalPrice: 3290, colors: [{ name: "White", hex: "#F5F5F5" }, { name: "Mint", hex: "#A8C5B0" }] }),

  item("p-35", "wooden-building-set", "Wooden Building Set", "toys", "Play", 1890, [
    "photo-1515488042361-ee00e0ddd4e4",
    "photo-1566576912321-d58ddd7a6088",
  ], { isNew: true, colors: [{ name: "Natural", hex: "#D2B48C" }] }),
  item("p-36", "plush-bear", "Plush Bear", "toys", "Soft toys", 990, [
    "photo-1530328821946-a8296b0d4c8a",
    "photo-1562042138-3e91d0cc8373",
  ], { isBestseller: true, colors: [{ name: "Honey", hex: "#C9A227" }, { name: "Cream", hex: "#F3EFE7" }] }),
  item("p-37", "activity-walker", "Activity Walker", "toys", "Baby", 3490, [
    "photo-1519689680058-324335c77eba",
    "photo-1522771930-78848d9293e8",
  ], { colors: [{ name: "Wood", hex: "#C4A574" }] }),

  item("p-38", "organic-granola", "Organic Granola", "food", "Pantry", 590, [
    "photo-1517686469429-48facc331371",
    "photo-1490818387583-1baba5e638af",
  ], { isNew: true, colors: [{ name: "Kraft", hex: "#C4A484" }] }),
  item("p-39", "green-tea-tin", "Green Tea Tin", "food", "Wellness", 790, [
    "photo-1564890369478-c89ca6d9cde9",
    "photo-1544787219-7f47ccb76574",
  ], { isBestseller: true, colors: [{ name: "Forest", hex: "#2F4F3E" }] }),
  item("p-40", "cold-pressed-oil", "Cold-Pressed Oil", "food", "Pantry", 890, [
    "photo-1474979266404-7eaacbcd87c5",
    "photo-1505576399279-565b52d4ac71",
  ], { colors: [{ name: "Amber", hex: "#C9A227" }] }),

  item("p-41", "car-phone-mount", "Car Phone Mount", "auto", "Interior", 790, [
    "photo-1489824904134-891ab645394f",
    "photo-1449965408869-eaa3f722e40d",
  ], { isNew: true, colors: [{ name: "Black", hex: "#1A1A1A" }] }),
  item("p-42", "microfiber-detail-kit", "Microfiber Detail Kit", "auto", "Care", 1290, [
    "photo-1486006920555-c77d7e987a01",
    "photo-1619642751034-76567c4af2d2",
  ], { colors: [{ name: "Grey", hex: "#888888" }] }),
  item("p-43", "riding-gloves", "Riding Gloves", "auto", "Gear", 1890, [
    "photo-1558981806-ec527fa84c39",
    "photo-1558618666-fcd25c85cd64",
  ], { sizes: ["S", "M", "L", "XL"], colors: [{ name: "Black", hex: "#111" }, { name: "Tan", hex: "#C4A574" }] }),

  item("p-44", "yoga-mat-pro", "Yoga Mat Pro", "sports", "Yoga", 1990, [
    "photo-1601925260368-ae2f76cfde0f",
    "photo-1544367567-0f2fcb009e0b",
  ], { isFeatured: true, colors: [{ name: "Slate", hex: "#6B7C85" }, { name: "Blush", hex: "#E8C4C4" }] }),
  item("p-45", "cricket-bat", "Kashmir Willow Bat", "sports", "Cricket", 3490, [
    "photo-1531415074968-036ba1b575da",
    "photo-1461896836934-ffe607ba6851",
  ], { isBestseller: true, colors: [{ name: "Willow", hex: "#E8D5B7" }] }),
  item("p-46", "adjustable-dumbbells", "Adjustable Dumbbells", "sports", "Gym", 6990, [
    "photo-1571019614242-c5c5dee9f50b",
    "photo-1517836357463-d25dfeac3438",
  ], { isNew: true, originalPrice: 8490, colors: [{ name: "Black", hex: "#1A1A1A" }] }),

  item("p-47", "boucle-sofa", "Bouclé Sofa", "furniture", "Seating", 54990, [
    "photo-1555041469-a586c61ea9bc",
    "photo-1540574163026-643ea20ade25",
  ], { isFeatured: true, isNew: true, colors: [{ name: "Ivory", hex: "#F3EFE7" }, { name: "Stone", hex: "#D9D2C5" }] }),
  item("p-48", "oak-dining-table", "Oak Dining Table", "furniture", "Tables", 38990, [
    "photo-1538688525198-9d99e4e2aa1b",
    "photo-1617806118233-18e1de247200",
  ], { colors: [{ name: "Oak", hex: "#C4A574" }] }),
  item("p-49", "walnut-bookshelf", "Walnut Bookshelf", "furniture", "Storage", 18990, [
    "photo-1594620302200-9a762244a156",
    "photo-1505693416388-ac5ce068fe85",
  ], { colors: [{ name: "Walnut", hex: "#5C4033" }] }),

  item("p-50", "design-notebook", "Clothbound Notebook", "books", "Stationery", 490, [
    "photo-1544947950-fa07a98d237f",
    "photo-1512820790803-83ca734da794",
  ], { isNew: true, colors: [{ name: "Navy", hex: "#1B2A4A" }, { name: "Rust", hex: "#B7410E" }] }),
  item("p-51", "slow-living-hardcover", "Slow Living Hardcover", "books", "Lifestyle", 890, [
    "photo-1495446815901-a7297e633e8d",
    "photo-1519682337058-a94d519337bc",
  ], { isBestseller: true, colors: [{ name: "Cream", hex: "#F3EFE7" }] }),
  item("p-52", "city-sketchbook", "City Sketchbook", "books", "Art", 690, [
    "photo-1456513080897-7aeafcdadc29",
    "photo-1471107340929-a87cd0f5b5f3",
  ], { colors: [{ name: "Kraft", hex: "#C4A484" }] }),

  item("p-53", "open-face-helmet", "Open-Face Helmet", "two-wheelers", "Safety", 4490, [
    "photo-1558981359-499a09033701",
    "photo-1449426468159-d96dbf6334bf",
  ], { isFeatured: true, sizes: ["M", "L", "XL"], colors: [{ name: "Matte Black", hex: "#1A1A1A" }, { name: "Cream", hex: "#E8DCC8" }] }),
  item("p-54", "scooter-phone-holder", "Scooter Phone Holder", "two-wheelers", "Accessories", 690, [
    "photo-1558981403-c5f9899a28bc",
    "photo-1558981033-0f0309284409",
  ], { isNew: true, colors: [{ name: "Black", hex: "#111" }] }),
  item("p-55", "riding-jacket-mesh", "Mesh Riding Jacket", "two-wheelers", "Gear", 5990, [
    "photo-1558618666-fcd25c85cd64",
    "photo-1558981806-ec527fa84c39",
  ], { sizes: ["S", "M", "L", "XL"], originalPrice: 7490, colors: [{ name: "Black", hex: "#111" }, { name: "Olive", hex: "#4A5240" }] }),

  item("p-56", "slim-cardholder", "Slim Cardholder", "accessories", "Leather", 1490, [
    "photo-1627123424574-724758594e93",
    "photo-1611652022419-a9419f74343d",
  ], { isNew: true, colors: [{ name: "Tan", hex: "#C4A574" }, { name: "Black", hex: "#1A1A1A" }] }),
  item("p-57", "silk-pocket-square", "Silk Pocket Square", "accessories", "Style", 890, [
    "photo-1591047139829-d91aecb6caea",
    "photo-1617127365659-c47fa166e60b",
  ], { colors: [{ name: "Navy", hex: "#1E2A3A" }, { name: "Burgundy", hex: "#6D2E3A" }] }),
];
