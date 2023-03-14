import React, { useEffect, useState } from "react";

import Search from "./Search";
import { headerMenu } from "./menu";
import Navbar from "../Navbar";

import "./global.css";
export default function Header() {
  return (
    <header>
      <div className="header__row header__row--1">
        <div className="header__container">
          <p className="header__top-bar">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </p>
        </div>
      </div>

      <div className="header__row header__row--2">
        <div className="header__container">
          <div className="header__collumn header__collumn--left">
            <img src="/images/icons/logo-maeztra.png" alt="logo" />
          </div>

          <div className="header__collumn header__collumn--center">
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
      </div>

      <div className="header__navbar-row">
        <Navbar menu={headerMenu} className="header" />
      </div>
    </header>
  );
}
