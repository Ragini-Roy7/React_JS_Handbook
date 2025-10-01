import Child from "./Child";

export default function Parent(){
    const message= "I`m parent component";
    const user= {name:"Eliya", age:27}
    return(
        <div>
            <Child text= {message} user= {user}/>
        </div>
    )
}
