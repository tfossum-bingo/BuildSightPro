import React from 'react'
// import Button from '../Button'
import { __AcknowledgeSpecification } from '../../services/SpecificationService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";


// Import ToDo Update Service
// Import Todo Delete Service

export default (props) => {
    // const { jobsite, setNeedsRefresh } = props
    const { setNeedsRefresh, specification, user } = props


    const acknowledgeSpecification = async () => {
        console.log('HIT AckSpec User: ', user)
        const data = {
            userId: user.id,
            specificationId: specification.id
        }
        console.log('HIT AckSpec: ', data)
        try {
            const ackResponse = await __AcknowledgeSpecification(data)
            setNeedsRefresh(true)
            return true
        } catch (error) {
            console.log('AckSpec error: ', error)
        }
    }

    const isAcknowledged = () => {
        const specUser = specification.specification_users.find(spec => spec.user_id == user.id)
        console.log('isAck: ', specUser, specification.specification_users)
        console.log('isAck2: ', specUser)
        if (specUser !== undefined) {
            return (
                <FontAwesomeIcon
                    className="fas fa-white"
                    style={{color: "green"}}
                    icon={faCheckCircle}
                />
            )
        }
        return (
            <button onClick={(e) => acknowledgeSpecification()}>Acknowledge</button>
        )
    }

    if (specification !== null && specification !== undefined) {
        return (
            <div className="spec-container">
                <h3>{specification.title}</h3>
                <p>{specification.description}</p>
                <h2>{isAcknowledged()}</h2>
            </div>
        )
    } else {
        return null
    }
}
