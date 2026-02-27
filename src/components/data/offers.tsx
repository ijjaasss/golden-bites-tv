export interface Offer {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  badge: string;
  image: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Lays Charcoal Shawarma',
    subtitle: 'shawarma',
    price: '99',
    badge: 'spicy',
    image: "/image/lys shawarma.png"
  },
  {
    id: 2,
    title: 'Charcoal Shawarma Combo',
    subtitle: 'Shawarma + French Fries + Soft Drinks',
    price: '99',
    badge: 'spicy',
    image: "/image/charcoal combo.png"
  },
  {
    id: 3,
    title: 'Chicken Charcoal Burger',
    subtitle: 'Combo',
    price: '99',
    badge: 'Juicy',
    image: "/image/charcoal burger.png"
  },
];
