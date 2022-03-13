import { ProductAPIResponse } from '../models/Product.model';

const PRODUCT_API_URL =
  'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e';

export function getProducts(): Promise<ProductAPIResponse> {
  return fetch(PRODUCT_API_URL).then(
    (data) => data.json() as Promise<ProductAPIResponse>
  );
}
