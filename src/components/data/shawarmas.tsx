export interface Shawarma {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const shawarmas: Shawarma[] = [
  {
    id: 1,
    name: "Charcoal Shawarma",
    description: "Delicious charcoal-grilled shawarma wrapped with fresh vegetables and flavorful sauce.",
    image: "/image/charcoal-shawarma.jpg"
  },
  {
    id: 2,
    name: "Special Charcoal",
    description: "Extra meat, premium toppings, and signature sauce.",
    image: "/image/special-charcoal-shawarma.jpg"
  },
  {
    id: 3,
    name: "Combo Shawarma",
    description: "Served with fries and a refreshing drink.",
    image: "/image/combo-charcoal-shawarma.jpg"
  },
  {
    id: 4,
    name: "Lays Charcoal",
    description: "Served with crispy Lays chips for extra crunch.",
    image: "/image/lays shawarma.jpeg"
  }
];
