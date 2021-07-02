/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import { updateTech, getOnTech } from '../services/api'
// import Form from './Form';
import {Link} from "react-router-dom";
import { Input } from 'antd';
import Loading from './Loading';
import Form from './Form';
export const Update = ({history, match}) => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateBirth, setDatebirth] = useState("");
    const [mobile, setMobile] = useState("");
    const [rue, setRue] = useState("");
    const [ville, setVille] = useState("");
    const [pays, setPays] = useState("");
    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadName()
    }, []);


    const loadName = () => {
        getOnTech(match.params.id).then((item)=>{
            setName(item.data.name)
            setLastname(item.data.lastname)
            setDatebirth(item.data.dateBirth)
            setMobile(item.data.mobile)
            setRue(item.data.rue)
            setVille(item.data.ville)
            setPays(item.data.pays)
            setEmail(item.data.email)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        window.location.reload()
        updateTech(match.params.id,{
            name, lastname, dateBirth, mobile, rue, ville, pays, email
        }).then((res)=>{
            setLoading(false)
            window.location.href= "/"
            toast.success(`${res.data.name} est bien ajouter`);
            setName=("")
            setLastname=("")
            setDatebirth=("")
            setMobile=("")
            setRue=("")
            setVille=("")
            setPays=("")
            setEmail=("")
        }).catch((err)=>{
            setLoading(false);
            console.log(err)
        })
    }

    return (
        <div className="mt-4">
            {
                loading ? <Loading/> : (
                    <>
                    <div className="container pt-4">
                        <div>
                            <Link to="/" className="btn btn-primary">Home page</Link>
                            <h4>Modification de <span className="text-info">{name}</span></h4>
                        </div>
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
                    </div>
                </>
                )
            }
        </div>
    )
}
