import React, { Component } from 'react'

//Use stateful class components
class Arrotech extends Component {
    render () {
        return (
            <div>
                <h1>Hey {this.props.name} a.k.a {this.props.nickName}</h1>
                {this.props.children}
            </div>
        )
    }

}

export default Arrotech