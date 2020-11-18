
import React, { useState, useEffect } from "react";
import ApiService from '../Utils/ApiService'
import { BrowserRouter as Router, Link } from 'react-router-dom';



const Home = () => {
    const [users, setUser] = useState([]);
    const [address, setAddress] = useState([]);
    const [certificate, setCertificate] = useState([]);
    const [telephones, setTelephones] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await ApiService.getUserValues();
        const { name, cpf, email, birthdate } = data;
        const  address  = data.address[0];
        const telephones = data.telephones[0]; 
        const  certificate = data.certificate[0] === undefined ? [] : data.certificate[0]; 
 
            
    
        

        const result = { name, cpf, email, birthdate }

        setUser(result);
        setAddress(address);
        setTelephones(telephones);
        setCertificate(certificate);
    };


    return (
        <div>
            <div className="container">
                <div >
                    <h1 className="center">Usuário {users.name}</h1>

                    <table className="striped responsive-table">
                        <thead className="thead-success ">
                            <tr className="grey lighten-2">
                                <th scope="col">Name</th>
                                <th scope="col">CPF</th>
                                <th scope="col">email</th>
                                <th scope="col">birthdate</th>
                                <th scope="col">Telephone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{users.name}</td>
                                <td>{users.cpf}</td>
                                <td>{users.email}</td>
                                <td>{users.birthdate}</td>
                                <td>{telephones.number}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="py-4">
                    <h3 className="center">Endereço</h3>

                    <table className="striped responsive-table">
                        <thead className="thead-success ">
                            <tr className="grey lighten-2">
                                <th scope="col">Rua</th>
                                <th scope="col">Cidade</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Numero</th>
                                <th scope="col">Complemento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{address.street}</td>
                                <td>{address.city}</td>
                                <td>{address.state}</td>
                                <td>{address.number}</td>
                                <td>{address.complement}</td>


                            </tr>
                        </tbody>
                    </table>

                    <div className="py-4">
                        <h3 className="center">Dados do certificado</h3>

                        <table className="striped responsive-table">
                            <thead className="thead-success ">
                                <tr className="grey lighten-2">
                                    <th scope="col">subjectDN</th>
                                    <th scope="col">issuerDN</th>
                                    <th scope="col">validFrom</th>
                                    <th scope="col">validTo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{certificate.subjectDN}</td>
                                    <td>{certificate.issuerDN}</td>
                                    <td>{certificate.validFrom}</td>
                                    <td>{certificate.validTo}</td>


                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Link to="/Upload">
                        <button className="btn btn-large">Realizar upload do Certificado .PEM </button>
                    </Link>

                </div>
            </div>
        </div>

    );
};

export default Home;
