import React from 'react'
// import Button from '../Button'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Import ToDo Update Service
// Import Todo Delete Service

export default (props) => {
    // const { jobsite, setNeedsRefresh } = props
    const { jobsite } = props
    let history = useHistory()
    console.log("Jobsite props: ", history)

    // const deleteTodo = async (e) => {
    //     console.log("HIT deleteTodo: ", todo)
    //     try{
    //         await __DeleteTodo(todo.id)
    //         setNeedsRefresh(true)
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    if (jobsite !== null && jobsite !== undefined) {
        return (
            <div>
                {jobsite.address_1}
                <FontAwesomeIcon
                    className="fas fa-white"
                    icon={faTimesCircle}
                />
                <button onClick={() => history.push(`/jobsites/${jobsite.id}`)}>Read More</button>
            </div>
        )
    } else {
        return null
    }
}
