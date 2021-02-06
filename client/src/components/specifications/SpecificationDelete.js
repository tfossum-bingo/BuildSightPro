import React from 'react'
import {connect} from 'react-redux'
import {deleteSpecification} from '../../store/actions/JobsiteActions'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

const SpecificationDelete = (props) => {
    const {userId, managerId, specificationId} = props
    const doRender = userId === managerId

    return doRender ? (
        <div className='spec-delete-container'>
            <div>
                <FontAwesomeIcon
                    onClick={() => props.deleteSpecification(specificationId)}
                    className="fas fa-white spec-delete"
                    icon={faTrashAlt}
                />
            </div>
        </div>
    ) : (
        null
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        deleteSpecification: (specificationId) => dispatch(deleteSpecification(specificationId))
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(SpecificationDelete)