import React, { FormEventHandler, useState } from "react"
import DataItem from "../components/dataItem"
import { useData } from '../contexts/DataContext'
import { Data } from "../services/dataService"


type Props = {}

const initForm: Data = {
    content: ""
}

const Home = (props: Props) => {
    const { datas, addData, updateData } = useData()
    const [form, setForm] = useState<Data>(initForm)

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
        <article>
            <form onSubmit={handleSubmit}></form>
            <section>
                {datas?.map(d => <DataItem {...d} key={d._id} onClick={handleDataItemClick(d)} />)}
            </section>
        </article>
    )
}

export default Home