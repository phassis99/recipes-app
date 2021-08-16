import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import laCookeryLogo from '../images/laCookery.svg';

import '../styles/Header.scss';
import HamburguerMenu from './HamburguerMenu';

function Header(props) {
  const { pageName, renderButton } = props;
  const [renderSearchBar, setRenderSearchBar] = useState(false);

  return (
    <header>
      <nav className={renderButton ? 'nav-3' : 'nav-2'}>
        <HamburguerMenu />
        <img src={laCookeryLogo} alt="laCookery-logo" className="header-logo" />
        {renderButton ? (
          <button
            className="header-button"
            type="button"
            onClick={() => setRenderSearchBar(!renderSearchBar)}
          >
            <i className="fal fa-search" />
          </button>
        ) : null}
      </nav>
      {renderSearchBar ? <SearchBar /> : null}
    </header>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  renderButton: PropTypes.bool.isRequired,
};

export default Header;
