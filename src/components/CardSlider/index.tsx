import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../Slider/settings";

interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider = (props: CardSliderProps) => {
  const { children } = props;

  return (
    <section className="cards-row">
      <Slider {...settings}>{children}</Slider>
    </section>
  );
};

export default CardSlider;
