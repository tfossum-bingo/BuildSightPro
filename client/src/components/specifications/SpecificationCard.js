import React from 'react'
import { connect } from 'react-redux'
import { acknowledgeSpecification } from '../../store/actions/JobsiteActions'

import SpecificationDelete from './SpecificationDelete'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const SpecificationCard = (props) => {
    const { specification, key } = props
    const ackData = {
        userId: props.userState.user.id,
        specificationId: specification.id
    }

    const imageLink = () => {
        const doRender = specification.attachmentUrl !== null && specification.attachmentUrl !== ""
        return doRender ? (
            <a className='spec-link' href={specification.attachmentUrl} rel="noreferrer" target='_blank'>View</a>
        ) : null
    }

    const isAcknowledged = () => {
        if (specification.specification_users !== undefined) {
            const specUser = specification.specification_users.find(spec => spec.user_id === props.userState.user.id)
            return specUser !== undefined ? (
                <FontAwesomeIcon
                    className="fas fa-white spec-acknowledged"
                    icon={faCheckCircle}
                />
            ) : (
                    <button onClick={() => props.acknowledgeSpecification(ackData)}>Acknowledge</button>
                )
        }
        return null
    }

    const doRender = specification !== null && specification !== undefined

    return doRender ? (
        <div key={key} className="basic-card spec-card">

            <SpecificationDelete
                userId={props.userState.user.id}
                managerId={props.jobsiteState.jobsite.userId}
                specificationId={specification.id} />

            <div className='spec-meta-container'>
                <span className='spec-title'>{specification.title}</span><br />
                {specification.description}<br />
                {imageLink()}
            </div>
            <div className='spec-action-container'>
                {isAcknowledged()}
            </div>
        </div>
    ) : null
}

const mapActionsToProps = (dispatch) => {
    return {
        acknowledgeSpecification: (ackData) => dispatch(acknowledgeSpecification(ackData))
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SpecificationCard)
