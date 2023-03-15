import "./global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { ProductProps } from "./types";
import { settings } from "./../Slider/settings";

interface ShelfProps {
  collection: any;
}

export default function Shelf({ collection }: ShelfProps) {
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
