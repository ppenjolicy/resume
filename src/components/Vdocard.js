import React from 'react'
import './Vdocard.css'
import '../App.css'

export default function Vdocard() {
    return (
        <div className="Vdocontain">
            <video src="/videos/Vdo1.mp4" autoPlay loop muted />
            <h1>PAILIN PARKPITCHAROEN</h1>
        </div>
    )
}
