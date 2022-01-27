import {Link} from "react-router-dom"

function Header(props){
    return (
        <div>
        <header>
            <h1>UGA FOOTBALL</h1>
            <nav className="nav">
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/players">
                <div>PLAYERS</div>
                </Link>
            </nav>
        </header>
        <hr />
        </div>
    )
  } 
  
  export default Header;