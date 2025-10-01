// fetching data from fake store api using hooks
//to reflect changes on ui, using hooks
//as we studied to fetch data from api, useEffect hook is used
import {useState,useEffect} from "react";
function FakeStoreAPI({ product }) {
  //products within {} as props
  return (
    <div>
      <h1>Fetching Product Data from FakeStoreAPI</h1>
      {/* using destructuring */}
      <h4>Product name is {product.title}</h4>
      <h5>
        About {product.title} {product.description}
      </h5>
    </div>
  );
}
// creating another child component to pass data from parent component ie. FakeStoreAPI component
function ProductsList(){
    // to use hooks,creating vars
    const [products, setProducts] = useState([])
     
    // using useEffect Hook
    useEffect(()=> {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err))
    },[]); 
    return(
        <div>
         {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map(product => <FakeStoreAPI key={product.id} product={product} />)
      )}
        </div>
    ) 
}
export default ProductsList;