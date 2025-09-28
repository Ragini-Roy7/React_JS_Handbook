const Form= (()=> {
    return(
        <form className="form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"
            placeholder= "Enter Your Name "></input>
            

            <label htmlFor="password">Password</label>
            <input type="password" id="password"
            placeholder="Enter Your Password"></input>
        </form>
    )
})
export default Form;