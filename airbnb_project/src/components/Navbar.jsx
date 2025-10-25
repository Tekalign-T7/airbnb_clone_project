import "../style/Navbar_style.css"
import logo from "../assets/airbnb.png"
export function Navbar(){
  return(
    <nav>
      <img src={logo} alt=" air bnb logo" className="logo"/>
    </nav>
  )

}