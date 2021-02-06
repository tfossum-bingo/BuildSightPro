import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
// const baseSpinnerClasses = ['fas', 'fa-white', 'list-header-icons']

const ListHeader = (props) => {
    // const {addForm, refreshAction} = props
    const [synchIconClasses, setSynchIconClasses] = useState(['list-header-sync', 'list-header-icons-containers'])
    const { displayFormAction, refreshAction, title, width } = props
    const appliedWidth = width ? width : '300px'

    const handleRefreshClick = () => {
        setSynchIconClasses(['list-header-sync', 'list-header-icons-containers', 'synch-spinner'])
        setTimeout(async function(){
            await refreshAction()
            setSynchIconClasses(['list-header-sync', 'list-header-icons-containers'])
        }, 500);
    }

    return (
        <div className='list-header-container' style={{ width: appliedWidth }}>
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
            <div className={synchIconClasses.join(" ")}>
            {/*<div className='list-header-sync list-header-icons-containers synch-spinner'>*/}
                <FontAwesomeIcon
                    onClick={handleRefreshClick}
                    // className={synchIconClasses.join(" ")}
                    className="fas fa-white list-header-icons"
                    style={{ color: "white" }}
                    icon={faSyncAlt}
                />
            </div>
        </div>
    )

}
export default ListHeader