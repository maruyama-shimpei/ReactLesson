export const InlineStyle = () => {
  const contanerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    coler: "#3d84a8"
  };
  const buttenrStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={contanerStyle}>
      <p style={titleStyle}>-Inline Styles-</p>
      <button style={buttenrStyle}>FIGHT!</button>
    </div>
  );
};
