import React from 'react'
import { connect } from 'react-redux'
import { acknowledgeSpecification } from '../../store/actions/SpecificationActions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";


// Import ToDo Update Service
// Import Todo Delete Service

const SpecificationCard = (props) => {
    // const { jobsite, setNeedsRefresh } = props
    const { setNeedsRefresh, specification, user } = props
    const ackData = {
        userId: props.userState.user.id,
        specificationId: specification.id
    }

    // const acknowledgeSpecification = async () => {
    //     console.log('HIT AckSpec User: ', user)

    //     console.log('HIT AckSpec: ', data)
    //     try {
    //         const ackResponse = await __AcknowledgeSpecification(data)
    //         setNeedsRefresh(true)
    //         return true
    //     } catch (error) {
    //         console.log('AckSpec error: ', error)
    //     }
    // }

    const imageLink = () => {
        console.log("HIT imageLink: ", specification.attachmentUrl)
        if(specification.attachmentUrl !== null && specification.attachmentUrl !== ""){
            return (
                <a href={specification.attachmentUrl} target='_blank'>Link</a>
            )
        }
        return null
    }

    const isAcknowledged = () => {
        const specUser = specification.specification_users.find(spec => spec.user_id == props.userState.user.id)
        console.log('isAck: ', specUser, specification.specification_users)
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
            <button onClick={(e) => acknowledgeSpecification(ackData)}>Acknowledge</button>
        )
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
