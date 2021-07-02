import React from 'react';
import {Input} from 'antd';
export default function Form({
    handleSubmit, 
    handleCancel,
    name, 
    lastname,
    dateBirth,
    mobile,
    rue,
    ville,
    pays,
    email,
    setName,
    setLastname,
    setDatebirth,
    setMobile,
    setRue,
    setVille,
    setPays,
    setEmail
}) {
    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                placeholder="Entrer votre nom"
                                value={name}
                                autoFocus
                                required
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="text"
                                placeholder="Entrer votre prenoms"
                                value={lastname}
                                autoFocus
                                required
                                onChange={(e)=>setLastname(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="date"
                                placeholder="Entrer votre date de naissance"
                                value={dateBirth}
                                autoFocus
                                required
                                onChange={(e)=>setDatebirth(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="text"
                                placeholder="Entrer votre numero"
                                value={mobile}
                                autoFocus
                                required
                                onChange={(e)=>setMobile(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                        <div className="form-group">
                            <Input
                                type="text"
                                placeholder="Entrer votre adresse 1"
                                value={rue}
                                autoFocus
                                required
                                onChange={(e)=>setRue(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="text"
                                placeholder="Entrer votre ville"
                                value={ville}
                                autoFocus
                                required
                                onChange={(e)=>setVille(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="text"
                                placeholder="Entrer votre pays"
                                value={pays}
                                autoFocus
                                required
                                onChange={(e)=>setPays(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="email"
                                placeholder="Entrer votre email"
                                value={email}
                                autoFocus
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary mt-1">Validez</button>
                    <button onClick={handleCancel} className="btn btn-danger mt-1">Annuler</button>
                </div>
            </form>
        </div>
    )
}
