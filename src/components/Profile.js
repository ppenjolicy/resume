import { Typography } from '@material-ui/core'
import React from 'react'
import Self from '../components/selfpic3.png'
import './Profile.css'

export default function Profile() {
    return (
        <div className='root'>

            <figure className='self-pic'>
                <img src={Self} alt="" />
            </figure>

            <h1>
                Pailin Parkpitcharoen
            </h1>
        </div>
    )
}

