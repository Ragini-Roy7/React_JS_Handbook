const ProductList= ()=> {
    
const prodList =[
    {
        id:1,
        name:"Mobile phone",
        company:"Xiaomi",
        price:80000
    },
    {
        id:2,
        name:"Electric Oven",
        company:"xyz",
        price:22000
    }, 
    {
        id:3,
        name:"Earphone",
        company:"One Plus",
        price:999
    }
]

return (
   <div>
    <main>
        <h4>Prod List</h4>
       <ul>
        {prodList.map((prod)=> {
            <li key= {prod.id}>
            {prod.name}
            {prod.company}
            {prod.company}
    </li>
        })}
       </ul>
    </main>
   </div>
)

}
export default ProductList;