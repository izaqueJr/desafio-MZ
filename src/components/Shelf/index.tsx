import "./global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { ProductProps } from "./types";

interface ShelfProps {
  collection: any;
}

export default function Shelf({ collection }: ShelfProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="shelf__container">
      <Slider {...settings}>
        {collection.map((prod: ProductProps) => {
          return (
            <div>
              <Product product={prod} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
