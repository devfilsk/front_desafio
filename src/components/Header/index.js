import React, { useEffect, useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';

import santriLogo from '../../assets/imagens/logo_santri.svg';

export default function Header() {

    const [ nome, setNome ] = useState("");

    const history = useHistory();

    useEffect(() => {
        function handleLogedIn() {
            const data = localStorage.getItem("user_name");
            const id = localStorage.getItem("user_id");
            if(!id) {
                history.push("/");
                return <Redirect to="/" push={true}/>
            }else{
                setNome(data);
            }
        }

        handleLogedIn();
    }, []);

    function handleLogout() {
        localStorage.clear();
        history.go("/")
    }

    return (
        <div className="header-container">
            <header>
                <img src={santriLogo} alt="Logo"/>
                <span>Bem vindo, {nome}</span>

                <Link className="button" to="/cadastrar">Cadastrar novo usuário</Link>
                <button onClick={handleLogout}>
                    {/* Sair */}
                    <FiPower size={18} color="#9c1d1c"/>
                </button>
            </header>
        </div>
    )
}
