import React from "react";

const HeaderMainMobile = () => {
  return (
    <div className="header__container header__mobile">
      <div className="header__collumn">
        <button className="header__mobile-button ">
          <img src="/images/icons/icon-menu.png" alt="search" />
        </button>

        <div className="header__collumn  header__mobile-logo">
          <img src="/images/icons/logo-maeztra.png" alt="logo" />
        </div>
      </div>

      <div className="header__collumn mobile">
        <button className="header__mobile-button">
          <img src="/images/icons/search-button.png" alt="search" />
        </button>

        <button className="header__mobile-button">
          <img src="/images/icons/minicart-mob.png" alt="minicart" />
        </button>
      </div>
    </div>
  );
};

export default HeaderMainMobile;
