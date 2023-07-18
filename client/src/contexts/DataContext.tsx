import React, { createContext, useContext, useCallback, ReactNode, useState, useEffect } from "react"
import { useAuth } from './AuthContext';
import dataService, { Data } from '../services/dataService';

type ContextState = {
    datas?: Data[] | undefined,
    addData: Function,
    updateData: Function,
    deleteData: Function,
    fetchDatas: Function
}

const dataContext = createContext<ContextState>({
    datas: undefined,
    addData: () => { },
    updateData: () => { },
    deleteData: () => { },
    fetchDatas: () => { }
})

type Props = {
    children: ReactNode
}

const DataContextProvider = (props: Props) => {
    const { user } = useAuth();
    const [datas, setDatas] = useState<Data[]>([])

    const fetchDatas = useCallback(async () => {
        try {
            const res = await dataService.getDatas()
            setDatas(res.data)
        } catch (error) {
            console.error("Fetch data Error --> ", error)
        }
    }, [])

    useEffect(() => {
        if (user) fetchDatas()
    }, [fetchDatas, user])

    const addData = async (data: Data) => {
        try {
            const res = await dataService.addData(data)
            setDatas(prev => [...prev, res.data])
        } catch (error) {
            console.error("Add Data Error --> ", error)
        }
    }

    const updateData = async (data: Data) => {
        try {
            const res = await dataService.updateData(data)
            const index = datas.findIndex(c => c._id === res.data._id)
            setDatas(prev => [
                ...prev.slice(0, index),
                res.data,
                ...prev.slice(index + 1)
            ])
        } catch (error) {
            console.error("Update Data Error --> ", error)
        }
    }

    const deleteData = async (data: Data) => {
        try {
            await dataService.deleteData(data)
            setDatas(prev => prev.filter(c => c._id !== data._id))
        } catch (error) {
            console.error("Delete Data Error --> ", error)
        }
    }

    return (
        < dataContext.Provider value={{ datas, addData, updateData, deleteData, fetchDatas }}>
            {props.children}
        </dataContext.Provider >
    )
}

export default DataContextProvider

export const useData = () => useContext(dataContext)