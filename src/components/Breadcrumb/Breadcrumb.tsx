import { matchRoutes, useLocation } from 'react-router-dom';
import { SYSTEM_ROUTES } from '../../helpers/Route.helper';
import { ExtendedRoute } from '../../models/Route.model';
import { BreadcrumbProps } from './Breadcrumb.types';

const DEFAULT_SEPARATOR = ' > ';

const Breadcrumb = ({ separator = DEFAULT_SEPARATOR }: BreadcrumbProps) => {
  const { pathname } = useLocation();
  const matchedRoutes = matchRoutes(SYSTEM_ROUTES, pathname) || [];

  console.log(pathname, matchedRoutes);

  const breadcrumbStrings = matchedRoutes
    .map(({ route }) => (route as ExtendedRoute).breadcrumb)
    .filter(Boolean);

  const breadcrumbCompletePath = breadcrumbStrings.join(separator);

  return <h4>{breadcrumbCompletePath}</h4>;
};

export default Breadcrumb;
