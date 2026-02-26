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
    image: "/image/shawarma.jpg"
  },
   {
    id: 2,
    name: "Lays Charcoal",
    description: "Served with crispy Lays chips for extra crunch.",
    image: "/image/lays shawarma.jpeg"
  },
  {
    id: 3,
    name: "Special Charcoal",
    description: "Extra meat, premium toppings, and signature sauce.",
    image: "/image/shawarma sp.jpg"
  }
 
];
