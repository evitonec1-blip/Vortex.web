export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  details: string[];
  specs: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'All' | 'Tech' | 'Apparel' | 'Living';
