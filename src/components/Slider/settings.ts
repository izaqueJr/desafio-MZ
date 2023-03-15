export const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 99999,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};
