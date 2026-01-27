import { Product } from "@/type/strollerRockerProductType";

export const strollerRockerProducts: Product[] = [
  {
    id: 1,
    name: "ZUVARA Zinx-Infant-to-Toddler Baby Rocker - Blue(ZV-R31)",
    slug: "zuvara-zinx-infant-to-toddler-baby-rocker-blue-zv-r31",
    category: "Stroller & Rocker",
    image: "/images/strollerRocker/rocker1.png",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    variants: [
      {id: 1, image: "/images/strollerRocker/rocker1.png", color: "Blue", weight: "4.42kg",
    width: "81.50cm",
    height: "52cm",
    depth: "30cm",}
    ],

    features: [
      "Simulating",
      "Comfortable",
      "Folding",
      "First Chair for New Born"
    ]
  },
  {
    id: 2,
    name: "ZUVARA Cheer Baby Stroller - Blue (ZV-S1)",
    slug: "zuvara-cheer-baby-stroller-blue-zv-s1",
    category: "Stroller & Rocker",
    image: "/images/strollerRocker/rocker1.png",
    rating: 4.5,
    reviews: 28,
    inStock: true,
    variants: [
      {id: 1, image: "/images/strollerRocker/rocker1.png", color: "Blue",}
    ],

    features: [
      "Safety is our Top Priority",
      "Soft Cushion",
      "Quick Folding pram",
      "Extended Canopy for UV Protection",
      "Premium Oxford Fabric"
    ]
  }
];
