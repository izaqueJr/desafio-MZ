import "./global.css";
import Title from "./../Title/index";
import Navbar from "../Navbar";

export default function Footer() {
  return (
    <footer>
      <section className="footer__row footer__row-1">
        <div className="footer__container">
          <div className="footer__column">
            <Title type="h4" align="left">
              Informações{" "}
            </Title>

            <Navbar
              className="footer"
              menu={[
                { text: "Quem somos", href: "#" },
                { text: "Prazo de Envio", href: "#" },
                { text: "Trocas e Devoluções", href: "#" },
                { text: "Promoções e Cupons", href: "#" },
              ]}
            />
          </div>

          <div className="footer__column">
            <Title type="h4" align="left">
              Minha Conta
            </Title>
            <Navbar
              className="footer"
              menu={[
                { text: "Minha Conta", href: "#" },
                { text: "Meus Pedidos", href: "#" },
                { text: "Cadastre-se", href: "#" },
              ]}
            />
          </div>

          <div className="footer__column">
            <Title type="h4" align="left">
              Onde nos Encontrar
            </Title>
            <Navbar
              className="footer"
              menu={[
                { text: "Lojas", href: "#" },
                { text: "Endereço", href: "#" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="footer__row footer__row-2">
        <div className="footer__row-2--container">
          <div className="footer__column--icons">
            <figure>
              <img src="/images/icons/social-media-1.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/social-media-2.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/social-media-3.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/social-media-4.png" alt="" />
            </figure>
          </div>

          <div className="footer__column--icons">
            <figure>
              <img src="/images/icons/mastercard.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/visa.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/mastercard.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/visa.png" alt="" />
            </figure>
          </div>

          <div className="footer__column--icons">
            <figure>
              <img src="/images/icons/vtex.png" alt="" />
            </figure>
            <figure>
              <img src="/images/icons/maeztra-footer.png" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </footer>
  );
}
