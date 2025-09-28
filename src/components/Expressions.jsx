// inside curly braces we write expressions 
//can be react var, prop, any valid js expression. It will execute expression and return the results

const Expresssions=()=> {
    const myName= "Ragini";
    const sum= (a,b)=> a+b;
    const some_class= "some class";
    return(
        <div>
            <p>Myself : {myName}</p>
            <p>My Tech stack : {["HTML5",  "CSS3",  "JS ES6+",  "React JS"].join(",")}</p>
            <p>2+2 is {sum(2,2)}</p>
            <p className= {some_class}>This is getting evaluated as js expression</p>
            {/* evaluates to js variable */}

        </div>
    )
}
export default Expresssions;