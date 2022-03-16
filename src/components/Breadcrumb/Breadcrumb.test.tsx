import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

import { useLocation, matchRoutes, RouteObject } from 'react-router-dom';
jest.mock('react-router-dom');

const useLocationMock = useLocation as jest.MockedFunction<typeof useLocation>;
const matchRoutesMock = matchRoutes as jest.MockedFunction<typeof matchRoutes>;

describe('Breadcrumb', () => {
  beforeEach(() => {
    useLocationMock.mockReturnValue({
      state: null,
      key: '',
      pathname: '',
      search: '',
      hash: '',
    });
  });

  test('renders 1-level breadcrumb', () => {
    matchRoutesMock.mockReturnValue([
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: { breadcrumb: 'Test' } as RouteObject,
      },
    ]);

    render(<Breadcrumb separator=" > " />);

    const breadcrumbText = screen.getByText('Test');
    expect(breadcrumbText).toBeInTheDocument();
  });

  test('renders 2-level breadcrumb', () => {
    matchRoutesMock.mockReturnValue([
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: { breadcrumb: 'Test' } as RouteObject,
      },
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: { breadcrumb: 'Another Test' } as RouteObject,
      },
    ]);

    render(<Breadcrumb separator=" > " />);

    const breadcrumbText = screen.getByText('Test > Another Test');
    expect(breadcrumbText).toBeInTheDocument();
  });

  test('ignores (index) routes without breadcrumb value', () => {
    matchRoutesMock.mockReturnValue([
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: { breadcrumb: 'Test' } as RouteObject,
      },
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: {} as RouteObject,
      },
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: { breadcrumb: 'Another Test' } as RouteObject,
      },
    ]);

    render(<Breadcrumb separator=" > " />);

    const breadcrumbText = screen.getByText('Test > Another Test');
    expect(breadcrumbText).toBeInTheDocument();
  });
});
