import Header from "./components/Header";
import Shelf from "./components/Shelf";
import MidBanner from "./components/MidBanner/index";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Title from "./components/Title";

import CardSlider from "./components/CardSlider";

import { products, partnerBrands, tipBar } from "./components/Api";

import "./Styles/Home/global.css";
import BannerSlider from "./components/BannerSlider";

function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerSlider
          items={[
            {
              image: "/images/fullbanner.png",
              url: "https://www.google.com.br",
            },
          ]}
        />
        <section className="section__container tipbar">
          <Title type="h4" align="center">
            Por que comprar na Maeztra?
          </Title>
          <CardSlider>
            {tipBar.map((item, index) => {
              return (
                <>
                  <div className="tipbar__container" key={index}>
                    <div className="tipbar__content">
                      <figure>
                        <img src={`${item.image}`} alt="" />
                      </figure>

                      <div className="tipbar__text-content">
                        <Title type="h5" align="left">
                          {item.title}
                        </Title>
                        <p className="tipbar__description">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </CardSlider>
        </section>

        <section className="section__container partnersBrands">
          <Title type="h2" align="center">
            Marcas Parceiras
          </Title>
          <CardSlider>
            {partnerBrands.map((item, index) => {
              return (
                <div>
                  <figure key={index}>
                    <img src={`${item.image}`} alt="" />
                  </figure>
                </div>
              );
            })}
          </CardSlider>
        </section>

        <section className="section__container shelf">
          <Title type="h2" align="center">
            As Mais Pedidas
          </Title>
          <Shelf collection={products} />
        </section>

        <MidBanner />

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default Home;
