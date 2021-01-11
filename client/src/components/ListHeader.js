import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare, faSyncAlt } from "@fortawesome/free-solid-svg-icons"

export default (props) => {
    // const {addForm, refreshAction} = props
    const { displayFormAction, refreshAction, title } = props

    return (
        <div class='list-header-container'>
            <div className='list-header-add list-header-icons-containers'>
                <FontAwesomeIcon
                    onClick={displayFormAction}
                    className="fas fa-white list-header-icons"
                    style={{ color: "white" }}
                    icon={faPlusSquare}
                />
            </div>
            <div className='list-header-title'>
                {title ? title : `Title`}
            </div>
            <div className='list-header-sync list-header-icons-containers'>
                <FontAwesomeIcon
                    onClick={refreshAction}
                    className="fas fa-white list-header-icons"
                    style={{ color: "white" }}
                    icon={faSyncAlt}
                />
            </div>
        </div>
    )

}