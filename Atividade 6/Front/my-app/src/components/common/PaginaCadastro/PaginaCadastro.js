import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../../api/auth.api'
import NavSup from '../NavSup/NavSup'
import "./PaginaCadastro.css"

export function PaginaCadastro() {
    const {register, handleSubmit} = useForm()
    let navigate = useNavigate()

    let sendData = (dados)=> {
        createUser(dados).then(
            function(response){
                console.log(response)
                navigate("/login")
            }
        )
    }
    return(
        <div>
            <NavSup></NavSup>
            <div className='background'>
                <form className="formsCad" onSubmit={handleSubmit(sendData)}>
                    Nome: <input className="formInput" {...register("nome")} type="text"></input> <br/>
                    Email: <input className="formInput" {...register("email")} type="text"></input> <br/>
                    Senha: <input className="formInput" {...register("senha")} type="password"></input> <br/>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}
