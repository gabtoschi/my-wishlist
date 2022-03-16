import { ExtendedRoute } from '../models/Route.model';
import BaseLayout from '../routes/BaseLayout';
import ProductListing from '../routes/ProductListing/ProductListing';
import WishlistListing from '../routes/WishlistListing/WishlistListing';

export enum SYSTEM_URLS {
  Wishlist = 'lista-de-desejos',
}

export const SYSTEM_ROUTES: ExtendedRoute[] = [
  {
    path: '/',
    element: <BaseLayout />,
    breadcrumb: 'Home',
    children: [
      { index: true, element: <ProductListing /> },
      {
        path: SYSTEM_URLS.Wishlist,
        element: <WishlistListing />,
        breadcrumb: 'Lista de desejos',
      },
    ],
  },
];
