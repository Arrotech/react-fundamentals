import React from 'react'


//Use jsx syntax
// const Jsx = () => {
//     return (
//         <div className="container">
//             <h1>JSX</h1>
//         </div>
//     )
// }

//No jsx syntax
const Jsx = () => {
    return React.createElement(
        'div',
        {id: 'header', className: 'container'},
        React.createElement('h1', null, 'No jsx syntax used'))
}

export default Jsx