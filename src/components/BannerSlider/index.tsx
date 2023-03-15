import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";
import { NextArrow, PrevArrow } from "./../Slider/Arrows";

const BannerSlider = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  type BannerProps = {
    image: string;
    url: string;
  };

  return (
    <section className={`slider__container ${props.device && props.device}`}>
      <Slider {...settings} className="banner-slider">
        {props.items.map(({ image, url }: BannerProps, index: number) => {
          return (
            <a href={url} key={index}>
              <figure>
                <img src={`${image}`} alt="" className="banner-slider__image" />
              </figure>
            </a>
          );
        })}
      </Slider>
    </section>
  );
};

export default BannerSlider;
