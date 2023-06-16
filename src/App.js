import Headers from "./Headers/Headers";
import Login from "./Login/Login";
import UseEffect from "./Useffect/Useffect";
import Button from "./Button/Button"
import "./App.css";
import { useState } from "react";
import { Component5 } from "./UseContext/UseContext";
import RouterReact from "./RouterReact/RouterReact"


function App() {

    // const [ clickMy, setClickMy]= useState(0)

    // function click(){
    // setClickMy(clickMy+10)
    // }


    // function click2(){
    //     setClickMy(clickMy-10)
    // }

    return (
        <div className="App">
            <RouterReact />
            <Login />
            {/* <UseEffect/>
            <Button title = "onClick1" clickMy = {click} bakraundColor ="yellow"/>
            <Button title = "onClick2" clickMy = {click2} bakraundColor = "red"/>
           <div className="app">{clickMy}</div> 
           <Component5/> */}
        </div>
    );
}

export default App;