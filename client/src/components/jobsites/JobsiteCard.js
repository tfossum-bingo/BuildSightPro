import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default (props) => {

    const { jobsite, user } = props
    let history = useHistory()
    console.log("Jobsite props: ", jobsite.id)

    
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
