import React from "react"

export default function Child(props){
    return(
        <div>
            <p>{props.text}</p>
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
        </div>
    )
}