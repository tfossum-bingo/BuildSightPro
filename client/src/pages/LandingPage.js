import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'
import Button from '../components/Button'

const LandingPage = (props) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='landing-container'>
            <h1>JobSightPro</h1>
            <p>“Specifications and Accountability”</p>
            <div className="landing-btns">
            <NavLink 
            to='/register'
            activeclassName='nav-active'
            onClick={handleClick}
             >
                <Button>
                    Get Started
                </Button>
            </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;
