import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider__container">
      <Slider {...settings}>
        {props.items.map(
          ({ image, url }: { image: string; url: string }, index: number) => {
            return (
              <a href={url} key={index}>
                <figure>
                  <img src={`${image}`} alt="" />
                </figure>
              </a>
            );
          }
        )}
      </Slider>
    </section>
  );
};

export default BannerSlider;
