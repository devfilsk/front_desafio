import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import api from '../../services/api';

import "./styles.css";

export default function Cadastro() {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    async function handleForm(data) {
        console.log("FOMR", data);

        const response = await api.post("mvc/public/usuario/store", data);

        console.log("SALVED", response)

        if(response.status === 200) {
            history.push("home");
        }
    }

    function handleCancel() {
        history.push("home");
    }

    return (
        <div className="register-container">
            <div id="lista_usuarios" className="content">

                <h4>Cadastro de usuários</h4>

                <form>
                    <input placeholder="Nome" ref={register({ required: true })} name="nome" type="text" className=""/>
                    <span className="errors-form">{ errors.nome && "O campo 'Nome' é obrigatório!" }</span>
                    <input placeholder="Login" ref={register({ required: true })} name="login" type="text" className="login"/>
                    <span className="errors-form">{ errors.login && "O campo 'Login' é obrigatório!" }</span>
                    <input placeholder="Senha" ref={register({ required: true })} name="senha" type="password" className="ativo"/>
                    <span className="errors-form">{ errors.senha && "O campo 'Senha' é obrigatório!" }</span>
                    <input placeholder="Ativo" ref={register({ required: true })} name="ativo" type="text" className="ativo"/>
                    <span className="errors-form">{ errors.ativo && "O campo 'Ativo' é obrigatório!" }</span>
                </form>

                <ul>
                    <li>
                        <input id="cadastrar_clientes" ref={register({ required: true })} name="autorizacao[]" type="checkbox" value="cadastrar_clientes"/> 
                        <label htmlFor="cadastrar_clientes">Cadastrar clientes</label>
                    </li>
                    <li>
                        <input id="excluir_clientes" ref={register({ required: true })} name="autorizacao[]" type="checkbox" value="excluir_clientes"/> 
                        <label htmlFor="excluir_clientes">Excluir clientes</label>
                    </li>
                    <li>
                        <input id="somente_leitura" ref={register({ required: true })} name="autorizacao[]" type="checkbox" value="somente_leitura"/> 
                        <label htmlFor="somente_leitura">Somente leitura</label>
                    </li>
                </ul>
                <span className="errors-form">{ errors.autorizacao && "É necessário selecionar a autorização!" }</span>

                <button className="button" onClick={handleSubmit(handleForm)}>Gravar</button>
                <button className="button-cancelar" onClick={handleCancel}>Cancelar</button>

            </div>
        </div>
    );
}