import React from "react";
import Title from "../Title";
import "./global.css";

export default function MidBanner() {
  return (
    <section className="section__container mid-banner">
      <div className="mid-banner__text-container">
        <Title type="h4" align="left">
          Lorem ipsum{" "}
        </Title>
        <p className="mid-banner__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>

      <a href="#" className="mid-banner__image-container desktop">
        <img src="/images/banner-02.png" alt="Coleção outono-inverno" />
      </a>
      <a href="#" className="mid-banner__image-container mobile">
        <img src="/images/banner-02-mobile.png" alt="Coleção outono-inverno" />
      </a>
    </section>
  );
}
