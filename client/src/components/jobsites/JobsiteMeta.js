import React from 'react'

const JobsiteMeta = (props) => {
    const { jobsite } = props
    return (
        <div className='jobsite-card-meta'>
            {jobsite.address_1}
            {jobsite.address_2}<br />
            {jobsite.city}, {jobsite.state} {jobsite.postal_code}<br />
            <br />
            Client: {jobsite.clientName}<br />
            Supervisor: {`${jobsite.User.firstName} ${jobsite.User.lastName}`}<br />
            Specifications: {jobsite.specifications.length}
        </div >
    )
}

export default JobsiteMeta