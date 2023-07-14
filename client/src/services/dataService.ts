import api from './api'

export interface Data{
    _id?: string,
    content: string,
    owner?: string
}

const prefix = "data"

const addData = async (data: Data) => await api.post(prefix, data)
const deleteData = async (data: Partial<Data>) => await api.delete(`${prefix}/${data._id}`)
const updateData = async (data: Data) => await api.put(`${prefix}/${data._id}`, data)
const getData = async () => await api.get(prefix)

const dataService = {
    addData,
    deleteData,
    updateData,
    getData
}

export default dataService