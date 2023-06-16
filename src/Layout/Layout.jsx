import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div>
      <nav className="Container">
        
        <ul className="Container-ul">
        <li>
            <Link className="Container-list" to="/">Home</Link>
          </li>
          <li>
            <Link className="Container-list" to="/Login">Login</Link>
          </li>
          <li>
            <Link className="Container-list" to="/UserList">UserList</Link>
          </li>
          <li>
            <Link className="Container-list" to="/contact">Contact</Link>
          </li>
        
        </ul>
        
      </nav>
      
      <Outlet />
    </div>
  )
};

export default Layout;