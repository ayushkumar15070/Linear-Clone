import "/src/components/Navbar.css"

function Links(props){
  return (
    <li><a href="#" className={props.classname}>{props.linkname}</a></li>
  )
}

function VerticalBar(props) {
  return (
    <div className = {props.classname}></div>
  )
}

const Navbar = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src="src/assets/wordmark-light.svg" alt="Logo" />
      </div>
      <div className="right-section">
        <ul>
          <Links linkname = "Products" />
          <Links linkname = "Resources" />
          <Links linkname = "Customers" />
          <Links linkname = "Pricing" />
          <Links linkname = "Now" />
          <Links linkname  = "Contact" classname = "contact"/>
          <VerticalBar classname = "vertical-bar" />
          <Links linkname = "Log in" classname = "log-in"/>
          <Links linkname = "Sign up" classname = "sign-up"/>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
