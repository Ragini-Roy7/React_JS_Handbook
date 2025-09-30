// conditional rendering-> dynamically displays data from components on UI based on conditions , ie. if-else, ternary operator

const Grocery= ()=> {
    const Items= ["Wireless EarBuds", "Xiaomi Mobile"   , "Milk Products", "Butter", "Casual Wear"]
    return(
        <>
        <h1>Cart Items &#128722;</h1>
        {Items.length>0 && <h5>{Items.length} items within cart</h5>}
        <ul>
            <h4>Products &#128230;</h4>
            {Items.map((item)=> {
                return(
                    <li key= {Math.random()}>{item}</li>
                )
            })}
        </ul>
        
        </>
    )
}
export default Grocery;