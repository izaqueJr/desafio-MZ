import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider = (props: CardSliderProps) => {
  const { children } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className="cards-row">
      <Slider {...settings}>{children}</Slider>
    </section>
  );
};

export default CardSlider;
