const ProductStock = ({ stock }) => {
  let stock_msg;
  if (stock > 0) {
    stock_msg = "Available";
  } else {
    stock_msg = "Not Available";
  }
  return (
    <div>
      <p>We have {stock} products . Product  status is {stock_msg}</p>
    </div>
  );
};
export default function Stock() {
  return <ProductStock stock={10} />;
}
