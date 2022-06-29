import "./header.css"
import logo from "../../assets/react.svg"

const Header = () => {
  return (
    <div className="logo-container">
        <img className="react-logo" src={logo} alt="react-logo" />
    </div>
  )
}

export default Header