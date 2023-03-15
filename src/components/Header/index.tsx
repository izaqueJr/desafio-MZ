import React, { useEffect, useState } from "react";

import Search from "./Search";
import { headerMenu } from "./menu";
import Navbar from "../Navbar";

import "./global.css";
import HeaderMainMobile from "./HeaderMainMobile";
import HeaderMainDesktop from "./HeaderMainDesktop";
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
        <HeaderMainMobile />
        <HeaderMainDesktop />
      </div>

      <div className="header__navbar-row desktop">
        <Navbar menu={headerMenu} className="header" />
      </div>
    </header>
  );
}
