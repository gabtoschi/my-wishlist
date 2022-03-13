export interface ProductAPIData {
  id: number;
  title: string;
  price: number;
  currencyFormat: string;
  image: string;
}

export interface ProductAPIResponse {
  products: ProductAPIData[];
}
