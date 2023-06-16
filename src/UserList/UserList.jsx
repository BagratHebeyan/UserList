

import { useEffect, useState } from "react";

import "./UserList.css";
import Headers from "../Headers/Headers";





function UserList() {
    const [modal, setModal] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [user, setUser] = useState([
        {
            id: 1,
            name: "Aram",
            lastname: "Gevorgyan",
            age: "30",
            email: "AramGevorgyan@mail.com",
            city: "Gyumri",
        }, {
            id: 2,
            name: "Karapet",
            lastname: "Avetisyan",
            age: "77",
            email: "KarapetAvetisyan@mail.com",
            city: "Erevan",
        }, {
            id: 3,
            name: "Karlen",
            lastname: "Sahakyan",
            age: "52",
            email: "KarlenSahakyan@mail.com",
            city: "Gyumri",
        }, {
            id: 4,
            name: "Petros",
            lastname: "Petrosyan",
            age: "36",
            email: "PetrosPetrosyan@mail.com",
            city: "Artashat",
        },
    ])


    return (

        <div className="contact-userlist">
            <Headers />
            <div className="container">
                <div>

                </div>
                <div className="max-width">
                    {user.map((item) =>
                        <div className="container-userList" key={item.id}>
                            <div className="container-userList-LastName">
                                <p>{item.name}</p>
                                <p>{item.lastname}</p>
                            </div>
                            <div className="container-userList-data">
                                <p>{item.email}</p>
                                <p>{item.age}</p>
                                <p>{item.city}</p>
                            </div>
                        </div>
                    )}

                </div>
                <div className="button">

                    <button onClick={() => {
                        setModal(!modal)
                    }}>AddUser
                    </button>

                </div>
            </div>
            {modal ? null :
                <div className="contact-userList-modal">
                    <div className="contact-userList-modal-card">
                        <div>
                            <div>
                                <input onChange={(e) => setName(e.target.value)}></input>
                                {name}
                            </div>
                            <div>
                                <input onChange={(e) => setLastname(e.target.value)}></input>
                                {lastname}
                            </div>
                            <div>
                                <input onChange={(e) => setAge(e.target.value)}></input>
                                {age}
                            </div>
                            <div>
                                <input onChange={(e) => setEmail(e.target.value)}></input>
                                {email}
                            </div>
                            <div>
                                <input onChange={(e) => setCity(e.target.value)}></input>
                                {city}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => {
                        setUser(...user,
                            {
                                id: 4,
                                name:`${name}`,
                                lastname: `${lastname}`,
                                age: `${age}`,
                                email: `${email}`,
                                city:`${city}`,
                            },
                        )
                    }}>AddUser</button>
                </div>

            }
        </div>

    )
}



export default UserList;