import { useRoutes } from 'react-router-dom';
import { SYSTEM_ROUTES } from '../helpers/Route.helper';

const RouteWrapper = () => {
  const routeToRender = useRoutes(SYSTEM_ROUTES);
  return routeToRender;
};

export default RouteWrapper;
