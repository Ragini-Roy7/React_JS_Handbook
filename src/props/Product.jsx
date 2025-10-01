const Products = () => {
  return (
    <Product
      name="NoteBook"
      id="notebook1233"
      company="kailash"
      price={499}
      type="stationary"
    />
  );
};
const Product = (props) => {
  return (
    <div>
        <p>Product name {props.name}</p>
        <p>Product Id {props.id}</p>
        <p>Product Company {props.company}</p>
        <p>Price {props.price}</p>
        <p>Product Type &#8377;{props.type}</p>

    </div>
  )
}
export default Products;