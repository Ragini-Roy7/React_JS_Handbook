import Container from "./Container";
//passing parent into child how
const Content= ()=> {
    // parent
    return(
        <div>
            <Container>
                <h4>Hydration Error comes when client side rednering and server side rendering doesn`t matches its output</h4>
                <p>List can not be descendent of list</p>
        
            </Container>
        </div>
    )
}
export default Content;