import React from 'react'
// import Button from '../Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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

    
    const isAcknowledged = () => {
        const specUser = specification.specification_users.find(spec => spec.user_id == user.id)
        console.log('isAck: ', specUser, specification.specification_users)
        console.log('isAck2: ', specUser)
        if (specUser !== undefined) {
            return (
                <FontAwesomeIcon
                className="fas fa-white"
                icon={faCheckCircle}
            />
            )
        }
        return (
            <button>Acknowledge</button>
        )
    }

    if (specification !== null && specification !== undefined) {
        return (
            <div>
                <h3>{specification.title}</h3>
                <p>{specification.description}</p>
                <h2>{isAcknowledged()}</h2>
            </div>
        )
    } else {
        return null
    }
}
