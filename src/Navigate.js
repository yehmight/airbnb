import './App.css';
import logo from "./image/airbnb.png";

function Header(){
    return(
        <nav className="airbnb">
            <img src={logo} alt="airbnb-logo"></img>
        </nav>
    )
}

export default Header;