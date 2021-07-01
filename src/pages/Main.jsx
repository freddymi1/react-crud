/* eslint-disable array-callback-return */
/* eslint-disable no-const-assign */
import React, {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import { getTech, addTech, deleteTech } from '../services/api';
import Form from './Form';
import {Link} from "react-router-dom"
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';

import Loading from './Loading';
export const Main =() => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateBirth, setDatebirth] = useState("");
    const [mobile, setMobile] = useState("");
    const [rue, setRue] = useState("");
    const [ville, setVille] = useState("");
    const [pays, setPays] = useState("");
    const [email, setEmail] = useState("");

    const [names, setNames] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadNames()
    }, []);

    const loadNames = () => getTech().then((tech)=>setNames(tech.data))
    console.log(names)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        window.location.reload()
        addTech({
            name, lastname, dateBirth, mobile, rue, ville, pays, email
        }).then((res)=>{
            setLoading(false)
            toast.success(`${res.data.name} est bien ajouter`);
            setName=("")
            setLastname=("")
            setDatebirth=("")
            setMobile=("")
            setRue=("")
            setVille=("")
            setPays=("")
            setEmail=("")
            loadNames();
        }).catch((err)=>{
            setLoading(false);
            console.log(err)
        })
    }

    const handleDelete = (id, name) => {
        if(window.confirm("Tu es sur de le supprimer? ")){
            setLoading(true);
            deleteTech(id).then((res) => {
                setLoading(false);
                toast.error(`${name} Bien supprimer`);
                loadNames();
            }).catch((err)=> {
                console.log(err)
            })
        }
    }

    return (
        <>
        {
            loading ? <Loading/> : (
                <>
                    <div className="container pt-4">
                        <div className="card mb-4 p-4">
                            <Form
                                handleSubmit={handleSubmit}
                                name={name}
                                lastname={lastname}
                                dateBirth={dateBirth}
                                mobile={mobile}
                                rue={rue}
                                ville={ville}
                                pays={pays}
                                email={email}
                                setName={setName}
                                setLastname={setLastname}
                                setDatebirth={setDatebirth}
                                setMobile={setMobile}
                                setRue={setRue}
                                setVille={setVille}
                                setPays={setPays}
                                setEmail={setEmail}

                            />
                        </div>
                        <div className="card p-3">
                            
                            <h4>List des techniciens</h4>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <caption>Liste des techniciens {names.length >= 10 ? names.length : "0"+ names.length}</caption>
                                    <thead>
                                        <tr className="tHeader">
                                            <th scope="col">#</th>
                                            <th scope="col">Nom</th>
                                            <th scope="col">Prenoms</th>
                                            <th scope="col">Date de naissance</th>
                                            <th scope="col">Telephone</th>
                                            <th scope="col">Adresse</th>
                                            <th scope="col">Adresse email</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            names && names.map((element)=>(
                                                <tr key={element.id}>
                                                    <td>{element.id}</td>
                                                    <td>{element.name}</td>
                                                    <td>{element.lastname}</td>
                                                    <td>{element.dateBirth}</td>
                                                    <td>{element.mobile}</td>
                                                    <td>{element.rue}, {element.ville} - {element.pays}</td>
                                                    <td>{element.email}</td>
                                                    <td>
                                                        <Link to={`/update/${element.id}`} className="btn btn-sm btn-primary">
                                                            <EditOutlined className="text-white"/>
                                                        </Link>
                                                        {/* <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                            <EditOutlined className="text-white"/>
                                                        </button> */}
                                                        <button
                                                            onClick={()=>handleDelete(element.id, element.name)}
                                                            className="btn btn-sm btn-danger"
                                                        >
                                                            <DeleteOutlined className="text-white"/>
                                                        </button>
                                                    
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
                )
            }

        </>
    )
}
