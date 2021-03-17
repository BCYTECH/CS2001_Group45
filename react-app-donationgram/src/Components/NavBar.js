import "./NavBar.css";
import Logo from "../Assets/logo.png";
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-wrapper">
        <div className="burger-menu">
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
        </div>
          <div className="">
            <NavLink to="/" className="logo"><img src={ Logo } style={{width: 100}, {height: 100}} alt="" /> </NavLink>
        </div>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/donate">DONATE</NavLink>
        <NavLink to="/recruitment">RECRUITMENT</NavLink>
        <NavLink to="/contactus">CONTACT US</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
      </div>
    </div>

);
}

export default NavBar;