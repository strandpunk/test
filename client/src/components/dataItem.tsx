import React from "react"
import { MouseEventHandler } from "react"
import { useData } from "../contexts/DataContext"
import { Data } from "../services/dataService"

type Props = Data & {
    onClick: VoidFunction
}

const DataItem = (props: Props) => {
    const { deleteData } = useData()

    const handleDeleteData: MouseEventHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        deleteData(props)
    }

    return (
        <article onClick={props.onClick}>
            <span>{props.content}</span>
            <span onClick={handleDeleteData}></span>
        </article>
    )
}
export default DataItem