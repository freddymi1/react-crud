import axios from 'axios';

export const getTech = async () => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}`);
}


export const addTech = async (name, lastname, dateBirth, mobile, rue, ville, pays, email) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}`,name, lastname, dateBirth, mobile, rue, ville, pays, email)
}

export const deleteTech = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`)
}

export const getOnTech = async (id) => {
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`)
}

export const updateTech = async (id, name, lastname, dateBirth, mobile, rue, ville, pays, email) => {
    return await axios.put(`${process.env.REACT_APP_BASE_URL}/${id}`, name, lastname, dateBirth, mobile, rue, ville, pays, email)
}