const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        // display: "block",
        background: "black",
        margin: "0px 2rem",
      }}
      onClick={onClick}
    />
  );
};

export default SampleNextArrow;
