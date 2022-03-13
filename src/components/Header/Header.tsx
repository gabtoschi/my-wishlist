import { BsSearch } from 'react-icons/bs';
import './Header.styles.scss';
import { HeaderProps } from './Header.types';

const Header = ({ companyName, links = [] }: HeaderProps) => {
  return (
    <nav>
      <div className="header-detail" />
      <div className="header-wrapper pt-3 pt-md-5 pb-3 pb-md-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <h3 className="company-name">{companyName}</h3>
            </div>
            <div className="col-12 col-md-9 container">
              <div className="links-wrapper d-flex justify-content-between">
                {links.map(({ label, icon }) => (
                  <div
                    key={label}
                    className="d-flex align-items-center justify-content-center"
                  >
                    {icon} <span className="ms-2">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 w-100">
                <div className="input-wrapper">
                  <i className="input-icon d-flex align-items-center justify-content-center">
                    <BsSearch />
                  </i>
                  <input
                    className="search-input py-2 w-100"
                    placeholder="Busca"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
