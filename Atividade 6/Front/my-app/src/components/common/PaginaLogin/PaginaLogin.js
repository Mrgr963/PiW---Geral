import { useContext } from "react"
import { login } from "../../../api/auth.api";
import { useForm } from 'react-hook-form';
import NavSup from "../NavSup/NavSup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";

export function PaginaLogin(){
    const {register, handleSubmit} = useForm()
    let navigate = useNavigate()
    let auth = useContext(AuthContext)

    let logIn = (info) => {
        login(info).then(
            function(response){
                let token = response.data.token
                auth.setToken(token)
                navigate("/")
            }
        )
    }

    return(
        <div>
            <NavSup></NavSup>
            <div className='background'>
                <form className="formsCad" onSubmit={handleSubmit(logIn)}>
                    Email: <input className="formInput" {...register("email")} type="text"></input> <br/>
                    Senha: <input className="formInput" {...register("senha")} type="password"></input> <br/>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}
