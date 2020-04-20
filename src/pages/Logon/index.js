import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import santriLogo from '../../assets/imagens/logo_santri.svg';

import './styles.css';
export default function Logon() {

    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    async function handleLogin(data) {
        // e.preventDefault();
        console.log("LOGAAR", data)

        try{
            const result = await api.post('mvc/public/login', data);

            if(result.data.USUARIO_ID) {
                localStorage.setItem("user_id", result.data.USUARIO_ID);
                localStorage.setItem("user_name", result.data.NOME_COMPLETO);

                history.push("home");
            }else{
                alert("Usuário ou senha incorretos")
            }

            console.log("LOGIN", result)
        }catch(err) {
            console.log("ERROR ", err)
        }
        
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={santriLogo} alt="Logo"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Login" name="login" ref={register({ required: true })}/>
                    { errors.login && "Digite um login válido!" }
                    <input placeholder="Senha" name="senha" ref={register({ required: true })}/>
                    { errors.login && "Digite uma senha válida!" }
                    <button type="submit" className="button" onClick={handleSubmit(handleLogin)}>Entrar</button>
                </form>
            </section>
        </div>
    )
}
