import "./Login.css"
import { useState } from "react";
import Home from "../Home/Home";


function Login() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [booleanTrue, setbooleanTrue] = useState(true)

    function clickmy() {
        if (login === "a" && password === "2023") {
            setbooleanTrue(false)
        }
    }

    return (
        <>
            {booleanTrue ?
                <div className="Login-container">
                    <div>
                        <div>
                            <input onChange={(event) => { setLogin(event.target.value) }}></input>
                        </div>
                        <div>
                            <input type="password" onChange={(event) => { setPassword(event.target.value) }}></input>
                        </div>
                        <div>
                            <button onClick={clickmy}>Մուտք</button>
                        </div>
                    </div>
                </div> :
                <Home/>
            }
        </>
    );
}


export default Login;