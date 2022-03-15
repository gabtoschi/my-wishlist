import { BsFillHeartFill, BsGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { HeaderProps } from '../components/Header/Header.types';

const App = () => {
  const headerProps: HeaderProps = {
    companyName: 'MinhaLoja',
    links: [
      { label: 'Cidade: São Paulo', icon: <BsGeoAltFill /> },
      { label: 'Central de atendimento', icon: <BsTelephoneFill /> },
      {
        label: 'Lista de desejos',
        icon: <BsFillHeartFill />,
        internalLink: 'lista-de-desejos',
      },
    ],
  };

  return (
    <>
      <div className="mb-5">
        <Header {...headerProps} />
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default App;
