import React from 'react'
import { useHistory } from 'react-router-dom'

const JobsiteCard = (props) => {

    const { jobsite } = props
    let history = useHistory()

    const doRender = jobsite !== null && jobsite !== undefined

    return doRender ? (
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
    ) : (
            null
        )

}
export default JobsiteCard