import { RouteObject } from 'react-router-dom';

export interface ExtendedRoute extends RouteObject {
  breadcrumb?: string;
  children?: ExtendedRoute[];
}
