import React  from 'react'
import Self from '../components/selfpic3.png'
import './Profile.css'
import RubberBand from 'react-reveal/RubberBand';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Profile = () => {

    return (
        <div className='box'>

            <figure className='self-pic'>
                <img src={Self} alt="" />
            </figure>

            <div className = "textbox">
                <h1>
                    <RubberBand>
                            P A I L I N <br/>
                            P A R K P I T C H A R O E N
                    </RubberBand>
                </h1>
            </div>
            
            <div>
                <ul>
                    <li>
                            <CallIcon className="iconbox"/>
                            <p className='texticon'>062-759-5542</p>
                    </li>
                    <li>
                            <MailOutlineIcon className='iconbox'/>
                            <p className='texticon'>pparkpitcharoen@gmail.com</p>
                    </li>
                    <li>
                            <GitHubIcon className='iconbox'/>
                            <a href="https://github.com/ppenjolicy" className='texticon'>ppenjolicy</a>
                    </li>
                    <li>
                            <FacebookIcon className='iconbox'/>
                            <a href="https://www.facebook.com/JoyParkpitcharoen" className='texticon'>Jolicy Ppen</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;