export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} arrow-custom`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="/images/icons/icon-next.png" alt="icon-prev" />
    </div>
  );
};
export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-custom`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="/images/icons/icon-prev.png" alt="icon-prev" />
    </div>
  );
};
