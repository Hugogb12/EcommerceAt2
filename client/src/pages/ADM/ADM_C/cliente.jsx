import './cliente.css';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../../components/SideBar/SideBar';


const AdminU = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
        navigate('/login'); 
    };
    const fetchData = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await axios.get('http://localhost:5000/api/usuario/users');
            console.log('Dados recebidos:', response.data);
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            setError('Erro ao buscar dados.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div id="U">
                <Sidebar />
                <div id='BodyU'>
                    <div className="dashboard-header">
                        <h1>Usuários que foram Cadastrados</h1>
                        <button onClick={handleLogout} className="logout-button">Sair</button>
                    </div>
                    <button onClick={fetchData}>Buscar Cadastrados</button>
                    {loading && <p>Carregando...</p>}
                    {error && <p className="error">{error}</p>}
                    {data.length > 0 && (
                        <ul>
                            {data.map((user, index) => (
                                <li key={index}>{user.email}</li>
                                
                            ))}
                        </ul>
                    )}
                    {data.length === 0 && !loading && <p>Nenhum usuário cadastrado.</p>}

                </div>


            </div>


        </>
    )

}
export default AdminU