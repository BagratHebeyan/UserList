import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import UserList from "../UserList/UserList";
import Home from "../Home/Home"
import Contact from "../Contact/Contact";


function RouterReact() {
    return (

        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="UserList" element={<UserList />} />
            <Route path="Contact" element={<Contact />} />

        </Routes>

    );
}

export default RouterReact