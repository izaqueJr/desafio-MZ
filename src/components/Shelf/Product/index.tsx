import { ProductProps } from "../types";

export default function Product({ product }: { product: ProductProps }) {
  const {
    productTitle,
    productURL,
    productImage,
    productPrice,
    productDescription,
    sku,
  } = product;
  return (
    <a className="product" href={productURL}>
      <figure>
        <img src={productImage} alt={productTitle} className="product__image" />
      </figure>

      <div className="product__content">
        <div className="product__colors">
          {sku.colors.map((item: { color: string }, index: number) => {
            return (
              <button
                key={index}
                className="product__colors--button"
                style={{ backgroundColor: item.color }}
              ></button>
            );
          })}
        </div>

        <h3 className="product__title">{productTitle}</h3>
        <h3 className="product__description">{productDescription}</h3>

        <div className="product__values">
          <div className="product__price-container">
            <span className="product__price">R${productPrice / 100}</span>
          </div>
        </div>

        <div className="product__addToCart">
          <div className="addToCart__container">
            <button className="addToCart__button">
              <span>Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
