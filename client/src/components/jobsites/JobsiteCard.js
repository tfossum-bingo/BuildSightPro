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
            <div className="jobsite-card-container">
                <p>
                    {jobsite.address_1}
                    {jobsite.address_2}
                </p>
                <p>
                    {jobsite.city}, {jobsite.state} {jobsite.postal_code}
                </p>

                <button onClick={() => history.push(`/jobsites/${jobsite.id}`)}>Read More</button>
            </div>
        )
    } else {
        return null
    }
}
