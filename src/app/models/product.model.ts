export interface IVariant {
  color: string;
  quantity: number;
  size: string[];
}

export interface IProduct {
  available: boolean;
  id: number;
  name: string;
  price: string;
  variants: IVariant[];
}

export interface IDropdown {
  name: string;
  value: string;
}
