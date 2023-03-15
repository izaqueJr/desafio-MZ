import Search from "../Search";

const HeaderMainDesktop = () => {
  return (
    <div className="header__container header__desktop">
      <div className="header__collumn header__collumn--left">
        <img src="/images/icons/logo-maeztra.png" alt="logo" />
      </div>

      <div className="header__collumn header__collumn--center ">
        <Search />
      </div>

      <div className="header__collumn header__collumn--right">
        <button className="login">
          <img src="/images/icons/icon-login.png" alt="login" />
          <span>minha conta</span>
        </button>

        <button className="wishlist">
          <img src="/images/icons/icon-wishlist.png" alt="login" />
          <span>Favoritos</span>
        </button>

        <button className="minicart">
          <img src="/images/icons/icon-minicart.png" alt="login" />
          <span>Meu carrinho</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderMainDesktop;
