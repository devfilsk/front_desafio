import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './styles.css';

export default function Home() {

    const [ usuarios, setUsuarios ] = useState([]);

    useEffect(() => {
    
        async function handleUsers() {
            try{
                const result = await api.get('mvc/public/usuario');
                if(result.status === 200) {
                    setUsuarios(result.data);
                }
                console.log("RESULT", result)
            }catch(err){
                alert("Falha ao buscar usuários");
            }
            
        }
        
        handleUsers()
    }, [])

    return (
        <div className="header-container">
            
            <h1>Usuários cadastrados</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Login</th>
                    </tr>
                </thead>
                
               <tbody>
                   {
                       usuarios.map(user => (
                        <tr key={user.USUARIO_ID}>
                            <td>{user.NOME_COMPLETO}</td>
                            <td>{user.LOGIN}</td>
                        </tr>
                       ))
                   }
                    
               </tbody>
            </table>
        </div>
    )
}
