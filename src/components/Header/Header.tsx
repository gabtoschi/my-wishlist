import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { HeaderProps } from './Header.types';

const Header = ({ companyName, links = [] }: HeaderProps) => {
  const linkElements = links.map(({ label, icon, internalLink = '/' }) => (
    <div
      key={label}
      className="d-flex align-items-center justify-content-center"
    >
      {icon}
      <Link to={internalLink} className="header-link">
        <span className="ms-2">{label}</span>
      </Link>
    </div>
  ));

  return (
    <nav>
      <div className="header-detail" />
      <div className="header-wrapper pt-3 pt-md-5 pb-3 pb-md-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 d-flex justify-content-center mt-3 mt-md-0">
              <h3 className="company-name">
                <Link to="/" className="header-link">
                  {companyName}
                </Link>
              </h3>
            </div>
            <div className="col-12 col-md-9 container">
              <div className="links-wrapper d-flex justify-content-between">
                {linkElements}
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
