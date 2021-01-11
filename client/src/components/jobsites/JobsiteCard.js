import React from 'react'
import { useHistory } from 'react-router-dom'
import JobsiteMeta from '../jobsites/JobsiteMeta'

const JobsiteCard = (props) => {

    const { jobsite } = props
    let history = useHistory()

    const doRender = jobsite !== null && jobsite !== undefined

    return doRender ? (
        <div className="jobsite-card-container">
            <JobsiteMeta jobsite={jobsite} />
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