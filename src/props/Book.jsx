const Book_Details= () => {
    return(
        // passing a component 
        <Book 
        name= {{
            title:"Atomic Habits",
            author:"James Clear"
        }}
        
        />
    )
}
const Book = (props) => {
    return(
        <div>
            <h4>Book Details</h4>
            <p>Book Name is {props.name.title}</p>
            <p> Book Author is {props.name.author}</p>
        </div>
    )
}
export default Book_Details;