import { BsFillHeartFill, BsGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Header from '../components/Header/Header';
import { HeaderProps } from '../components/Header/Header.types';
import { SYSTEM_URLS } from '../helpers/Route.helper';

const BaseLayout = () => {
  const headerProps: HeaderProps = {
    companyName: 'MinhaLoja',
    links: [
      { label: 'Cidade: São Paulo', icon: <BsGeoAltFill /> },
      { label: 'Central de atendimento', icon: <BsTelephoneFill /> },
      {
        label: 'Lista de desejos',
        icon: <BsFillHeartFill />,
        internalLink: SYSTEM_URLS.Wishlist,
      },
    ],
  };

  return (
    <>
      <div className="mb-4">
        <Header {...headerProps} />
      </div>

      <div className="container">
        <div className="mb-4">
          <Breadcrumb />
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default BaseLayout;
