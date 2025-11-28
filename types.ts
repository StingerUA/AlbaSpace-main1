
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  tag?: string;
}

export interface ModelData {
  title: string;
  description: string;
  images: string[];
  glbUrl: string;
}

export interface NavLink {
    label: string;
    path: string;
}
