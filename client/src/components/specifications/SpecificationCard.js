import React from 'react'
// import Button from '../Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Import ToDo Update Service
// Import Todo Delete Service

export default (props) => {
    // const { jobsite, setNeedsRefresh } = props
    const { specification, user } = props

    // const deleteTodo = async (e) => {
    //     console.log("HIT deleteTodo: ", todo)
    //     try{
    //         await __DeleteTodo(todo.id)
    //         setNeedsRefresh(true)
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    if (specification !== null && specification !== undefined) {
        return (
            <div>
                <h3>{specification.title}</h3>
                <p>{specification.description}</p>
                <FontAwesomeIcon
                    className="fas fa-white"
                    icon={faTimesCircle}
                />
            </div>
        )
    } else {
        return null
    }
}
