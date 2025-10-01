//children component
const Container= (props)=> {
    return(
        <div>
          <p>Understand how to pass data from parent component to child component</p>
          <p>We can access it via passing props</p>
          <div>{props.children}</div>
        </div>
    )
}
export default Container;