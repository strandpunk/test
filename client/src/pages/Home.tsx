import React, { FormEventHandler, useState } from "react"
import DataItem from "../components/dataItem"
import { useAuth } from "../contexts/AuthContext"
import { useData } from '../contexts/DataContext'
import { Data } from "../services/dataService"
import './Home.css'


type Props = {}


const initForm: Data = {
    content: ""
}

const Home = (props: Props) => {
    const { datas, addData, updateData } = useData()
    const [form, setForm] = useState<Data>(initForm)

    const { user } = useAuth()

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        if (form._id) {
            updateData(form)
        } else {
            addData(form)
        }
        setForm(initForm)
    }

    const handleDataItemClick = (data: Data) => {
        return () => setForm(data)
    }

    return (
        <div className="home-wrapper">
            <div className="home-main">
                <section>
                    {datas?.map(d => <DataItem {...d} key={d._id} onClick={handleDataItemClick(d)} />)}
                </section>
                <div>{user?.name}</div>
            </div>
        </div>
    )
}

export default Home