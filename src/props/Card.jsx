const Card_info = () => {
  return (
    <Card>
      <h5>Inside card</h5>
      <p>This is inside children content</p>
    </Card>
  );
};
const Card = (props) => {
  return (
    <div
      style={{
        border: "1px solid green",
        borderRadius: "5px",
        padding: "10px",
        display: "flex",
        font: "Verdana, sans-serif",
        justifyContent: "center",
        backgroundColor: "#eb87b9ff",
        marginTop:"20px"
      }}
    >
      {props.children}
    </div>
  );
};
export default Card_info;
