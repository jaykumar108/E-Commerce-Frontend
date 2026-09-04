import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "r-01",
    productId: "p-01",
    name: "Priya S.",
    rating: 5,
    date: "12 Aug 2026",
    title: "Better than expected",
    comment:
      "Soft, not itchy, and the ivory shade is true to the photos. I sized up for a looser drape.",
  },
  {
    id: "r-02",
    productId: "p-01",
    name: "Dev K.",
    rating: 4,
    date: "3 Aug 2026",
    title: "Daily driver",
    comment:
      "Holds its shape after several washes. Would love a heather grey next.",
  },
  {
    id: "r-03",
    productId: "p-07",
    name: "Meera R.",
    rating: 5,
    date: "21 Jul 2026",
    title: "Walked 8km on day one",
    comment:
      "Cushioning is excellent. The crimson is louder in person — in a good way.",
  },
  {
    id: "r-04",
    productId: "p-10",
    name: "Arjun P.",
    rating: 5,
    date: "9 Jul 2026",
    title: "Dress-watch energy, daily wear",
    comment:
      "The sunburst dial photographs well. Strap quality is far above the price.",
  },
];

export const getReviewsByProductId = (productId: string) =>
  reviews.filter((r) => r.productId === productId);
