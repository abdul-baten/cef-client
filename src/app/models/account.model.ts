import { IProduct } from './product.model';

export interface IAccount {
  email: string;
  fullname?: string;
  id: string;
  password: string;
  products?: IProduct[];
}
