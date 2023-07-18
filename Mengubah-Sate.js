import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Header extends React.Component {
    constructor() {
        super();
        // membuat objek state
        this.state = {
            title: "Belajar Reactjs",
            subTitle: "Panduan step-by-step Reactjs untuk pemula"
        };
    }

    changeTitle = function() {
        this.setState({
            title: "Aku Pasti Bisa Menjadi Programmer"
        });
    };

    render() {
        return ( <
            div >
            <
            h1 > { this.state.title } < /h1> <
            h2 > { this.state.subTitle } < /h2> <
            button onClick = { this.changeTitle } > Ubah Judul < /button> < /
            div >
        );
    }
}

ReactDOM.render( < Header / > , document.getElementById("root"));