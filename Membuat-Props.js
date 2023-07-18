import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return <User name = "Jone Doe" / >
    }
}

// Other Component
class User extends Component {
    render() {
        return ( <
            div >
            <
            h1 > Welcome user: { this.props.name } < /h1> <
            /div>
        )
    }
}


// import React from 'react'

// function User(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// export default function Home() {
//   return (
//     <div>
//       <User name="John" />
//       <User name="Jane" />
//       <User name="Jimmy" />
//     </div>
//   )
// }