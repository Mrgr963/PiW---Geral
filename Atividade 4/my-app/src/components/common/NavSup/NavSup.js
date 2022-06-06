
import "./NavSup.css"

function NavSup(){
    return(
        <div className="navSpace">
            <div className="navsup">
            <div className="barra">
                <img className="logoimg" src="https://64.media.tumblr.com/cb8e00de5709cc42a74da865da20de26/tumblr_mln8th6D1F1r4qxzoo1_1280.png"></img>
                <h1 className="logoname">Pesterchum</h1>

                <div className="buttonSpace">
                <a className="button active" href="">Linha do Tempo</a>
                <a className="button" href="">Postar</a>
                <a className="button" href="">G.R</a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default NavSup