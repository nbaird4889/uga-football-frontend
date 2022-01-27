import {Link} from "react-router-dom"

function Header(props){
    return (
        <header>
            <h1>UGA FOOTBALL</h1>
            <nav className="nav">
                <Link to="/">
                <div>Players</div>
                </Link>
    </nav>
        </header>
    )
  } 
  
  export default Header;