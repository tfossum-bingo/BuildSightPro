import React from 'react'
import { connect } from 'react-redux'
import { acknowledgeSpecification } from '../../store/actions/JobsiteActions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SpecificationCard = (props) => {
    const { specification } = props
    const ackData = {
        userId: props.userState.user.id,
        specificationId: specification.id
    }
    console.log("SpecCard ackData: ", ackData)
    const imageLink = () => {
        if (specification.attachmentUrl !== null && specification.attachmentUrl !== "") {
            return (
                <a href={specification.attachmentUrl} target='_blank'>Link</a>
            )
        }
        return null
    }

    const isAcknowledged = () => {
        if (specification.specification_users !== undefined) {
            const specUser = specification.specification_users.find(spec => spec.user_id === props.userState.user.id)
            console.log('isAck2: ', specUser)
            if (specUser !== undefined) {
                return (
                    <FontAwesomeIcon
                        className="fas fa-white"
                        style={{ color: "green" }}
                        icon={faCheckCircle}
                    />
                )
            }
            return (
                <button onClick={() => props.acknowledgeSpecification(ackData)}>Acknowledge</button>
            )
        }
        return null
    }

    if (specification !== null && specification !== undefined) {
        return (
            <div className="spec-container">
                <h3>{specification.title}</h3>
                <p>{specification.description}</p>
                {imageLink()}
                <h2>{isAcknowledged()}</h2>
            </div>
        )
    } else {
        return null
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        acknowledgeSpecification: (ackData) => dispatch(acknowledgeSpecification(ackData))
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SpecificationCard)
