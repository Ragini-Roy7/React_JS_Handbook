const ProductList = () => {
  const prodList = [
    {
      id: 1,
      name: "Mobile phone",
      company: "Xiaomi",
      price: 80000,
    },
    {
      id: 2,
      name: "Electric Oven",
      company: "xyz",
      price: 22000,
    },
    {
      id: 3,
      name: "Earphone",
      company: "One Plus",
      price: 999,
    },
  ];

  return (
    <div>
      {prodList.map((prod) => {
        return (
          <div key={prod.id}>
            <ul>
                <li>{prod.id}</li>
                <li>{prod.name}</li>
                <li>{prod.company}</li>
                <li>{prod.price}</li>
            </ul>
          
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
