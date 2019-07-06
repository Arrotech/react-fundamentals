import React from 'react'

//This is a stateless functional component
// function Name() {
//     return <h1>Arrotech</h1>
// }


//using arrow function and props
const Name = (props) => {
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.nickName}</h1>
            {props.children}
        </div>
    )
}

//export the component as default contary to named export
export default Name;

