
import { NavLink } from "react-router-dom"
import "./NavSup.css"

function NavSup(){
    return(
        <div className="navSpace">
            <div className="navsup">
            <div className="barra">
                <img className="logoimg" src="https://64.media.tumblr.com/cb8e00de5709cc42a74da865da20de26/tumblr_mln8th6D1F1r4qxzoo1_1280.png"></img>
                <h1 className="logoname">Pesterchum</h1>

                <div className="buttonSpace">
                <NavLink classname="button" to="/">Timeline</NavLink>
                <NavLink className="button" to="/post">Postar</NavLink>
                <a className="button" href="">G.R</a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default NavSup