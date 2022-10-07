const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "black",
        fontSize: "12px",
        margin: "0px 2rem",
      }}
      onClick={onClick}
    />
  );
};

export default SamplePrevArrow;
