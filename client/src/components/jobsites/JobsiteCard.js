import React from 'react'
import { useHistory } from 'react-router-dom'

const JobsiteCard = (props) => {

    const { jobsite } = props
    let history = useHistory()

    const doRender = jobsite !== null && jobsite !== undefined

    return doRender ? (
        <div className="jobsite-card-container">
            <div className='jobsite-card-meta'>
                {jobsite.address_1}{

                }
                    {jobsite.address_2}<br/>
                    {jobsite.city}, {jobsite.state} {jobsite.postal_code}<br/>
                    <br/>
                    Client: {jobsite.clientName}<br/>
                    Supervisor: {`${jobsite.User.firstName} ${jobsite.User.lastName}`}
                

            </div >
            <div className='jobsite-card-action'>
                <button
                    className='jobsite-card-action'
                    onClick={() => history.push(`/jobsites/${jobsite.id}`)}>Details</button>
            </div>
        </div >
    ) : (
            null
        )

}
export default JobsiteCard