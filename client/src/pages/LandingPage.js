import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'
import WelcomeHeader from '../components/WelcomeHeader'
import Button from '../components/Button'

const LandingPage = (props) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='landing-container'>
            <WelcomeHeader />
            <h1>JobSightPro</h1>
            <p>Designs for Accountability</p>
            <div className="landing-btns">
            <NavLink 
            to='/register'
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
