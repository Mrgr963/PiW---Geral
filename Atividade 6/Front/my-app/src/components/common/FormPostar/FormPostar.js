import "./FormPostar.css"

function FormPostar() {
    return(
        <div className="geralBg2">
           <div classname="postBoxSpace">
                   <form className="post">
                      <div className="postContent">
                        <input className="input" name="texto" type="text" value="..." background-color="black"></input>
                        </div>
                        
                        <div className="buttonSubmit">
                        <input className="inputSubmit" type="submit"></input>
                        </div>
                   </form>
           </div>
        </div>
    )
}

export default FormPostar